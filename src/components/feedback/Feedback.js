import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, ListView, Platform, TouchableHighlight} from 'react-native';

import {FeedbackCriteria} from './FeedbackCriteria';
import * as feedbackAction from '../../actions/feedback';

import { connect } from 'react-redux';

class Feedback extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      titleText: "Rate this session",
      bodyText: 'This is not really a bird nest.',
      ratingCriteria : dataSource.cloneWithRows(
        ['Overall', 'Relevance', 'Content', 'Quality', 'Comment']
      )
    };
    console.log('feedback props', this.props)
    this.props.addFeedback(
      {sessionId : this.props.navigation.state.params.sessionData.sessionId,
        eventId: this.props.navigation.state.params.sessionData.conferenceId
       }
      )
  }


   rows(rowData, sessionData) {
    if(rowData === 'Comment') {
      //debounce on comment with UPDATE
      return (
        <View style={styles.container}>   
          <Text style={styles.h2}>{rowData}</Text>
          <TextInput 
            style={{height: 30, flexBasis: 90, borderColor: 'yellow', borderWidth: 1, color: 'yellow'}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
        </View>);
    }
    let { updateFeedback } = this.props
    let { nav } = this.props

    return (
    <FeedbackCriteria 
      key={rowData}
      title={rowData} 
      selectedScore={(score) => updateFeedback(score)}
      sessionData={sessionData}
      />);
  }

  render() {
    const { params } = this.props.navigation.state;
    let { submitFeedback, feedbackData } = this.props;
    return (
      <View style={styles.container}>
        
          <TouchableHighlight 
              style={styles.backBtn} 
              onPress={() => this.props.navigation.navigate('SessionList')}>
              <Text style={styles.backBtnText}>Tilbake</Text>
          </TouchableHighlight>  
          
          <Text style={styles.h1}>{params.sessionTitle}</Text>
          <ListView
            key="kay"
            dataSource={this.state.ratingCriteria}
            renderRow={(rowData, rowId) => this.rows(rowData, params.sessionData)}
          />
          <TouchableHighlight
            style={styles.submitBtn}
            onPress={()=> {
              
              let comment = this.state.text;

             let feedback = feedbackData.filter((f) => {
                return f.sessionId=== params.sessionData.sessionId;
                });
             let reduced = feedback.reduce((acc, curr)=>{ 
                  console.log('curr', curr)
                  return Object.assign(acc, {...curr});
                  }, {});
            
            let f = Object.assign(reduced, {comment: this.state.text});
            //  console.log('feedback', feedbackData.feedbackList);
            //  console.log('feedback', params.sessionTitle);
             console.log('feedback', f);
            submitFeedback(f);
            }}
          >
          <Text style={styles.submitBtnText}>Submit feedback</Text>
          </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
        ...Platform.select({
          ios: { paddingTop: 30 }
        }),
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    backBtn : {
      alignSelf: 'flex-start',
      margin: 10
    },
    backBtnText: {
      color: '#dddddd'
    },
    submitBtn: {
      height: 30
    },
    submitBtnText: {
      color: '#dddddd'
    },
    h1 : {
       fontSize: 24,
       color: '#dddddd' 
    },
    h2: {
        fontSize: 20,
        textAlign: 'center',
        color: '#666666'    
    },
    scoreContainer: {
        flexDirection: 'row', 
        backgroundColor: '#000000'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginTop: 100,
        marginBottom: 5
    }
});

const mapStateToProps = (state) => { 
  return {  
    feedbackData: state.feedback
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFeedback: (feedback) => {
      dispatch(feedbackAction.addFeedback(feedback))
    },
    updateFeedback : (score)=>{
      dispatch(feedbackAction.updateFeedback(score))
    },
    submitFeedback : (feedback) => {
      dispatch(feedbackAction.submitFeedback(feedback))  
    }
  }; 
};
export default connect(mapStateToProps, mapDispatchToProps)(Feedback);