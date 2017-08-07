import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, ListView, Platform, TouchableHighlight, Alert} from 'react-native';

import {FeedbackCriteria} from './FeedbackCriteria';
import * as feedbackAction from '../../actions/feedback';

import { connect } from 'react-redux';

class Feedback extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      titleText: "Rate this session",
      categories: ['Overall', 'Relevance', 'Content', 'Quality', 'Comment'],
      ratingCriteria : dataSource.cloneWithRows(
        ['Overall', 'Relevance', 'Content', 'Quality', 'Comment']
      ),
      feedbackData: this.props.feedbackData
    };
    this.props.addFeedback(
      {sessionId : this.props.navigation.state.params.sessionData.sessionId,
        eventId: this.props.navigation.state.params.sessionData.conferenceId
       }
      )
  }


   rows(rowData, rowId,sessionData) {
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
    } else {
    console.log('#####Feddback comp feedback data', this.state.feedbackData)
      let { updateFeedback } = this.props
      let { nav } = this.props

      return (
      <FeedbackCriteria 
        key={rowId}
        title={rowData} 
        feedbackData={this.state.feedbackData}
        selectedScore={(score) => updateFeedback(score)}
        sessionData={sessionData}
        />);
      
    }
  }

  okPressed(error) {
    this.props.removeError(error);
  }

  displayError(error) {
    if(error.length > 0) {
      Alert.alert('Error', error[0].error, [
        {text: 'OK', onPress: () => this.okPressed(error[0])},
      ]);
    }
  }

  render() {
    const { params } = this.props.navigation.state;
    let { submitFeedback, feedbackData, errors } = this.props;
    console.log('feedback comp render feedbackdata', feedbackData)
    //<ListView
    //        dataSource={this.state.ratingCriteria}
    //        renderRow={(rowData, rowId) => this.rows(rowData,rowId, params.sessionData, feedbackData)}
    //      />
    const feedbackCriteriaList = this.state.categories.map(c => {
      return (
        <FeedbackCriteria 
          title={c}
          feedbackData={feedbackData}
          sessionData={params.sessionData}
          selectedScore={(score) => this.props.updateFeedback(score)}
        />
      )
    })
    

    this.displayError(errors);
    return (
      <View style={styles.container}>
        
          <TouchableHighlight 
              style={styles.backBtn} 
              onPress={() => this.props.navigation.navigate('SessionList')}>
              <Text style={styles.backBtnText}>Tilbake</Text>
          </TouchableHighlight>  
          
          <Text style={styles.h1}>{params.sessionTitle}</Text>
          {feedbackCriteriaList}
          
          <TouchableHighlight
            style={styles.submitBtn}
            onPress={()=> {
              
              let comment = this.state.text;

             let feedback = feedbackData.feedback.filter((f) => {
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
  console.log('map stat to props', state)
  return {  
    feedbackData: state.feedback,
    errors : state.errors
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
    },
    removeError: (error) => {
      dispatch(feedbackAction.removeError(error))
    }
  }; 
};
export default connect(mapStateToProps, mapDispatchToProps)(Feedback);