import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, ListView, Platform, TouchableHighlight, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import style from '../../common/style'
import Toast, {DURATION} from 'react-native-easy-toast'

import {FeedbackCriteria} from './FeedbackCriteria';
import * as feedbackAction from '../../actions/feedback';

import { connect } from 'react-redux';

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Rate this session",
      categories: [
        {id: 'Overall', title: 'Session rating', low: 'Not so awesome', high: 'Awsome'}, 
        {id: 'Relevance', title: 'How relevant was this session to your projects', low: 'Not at all', high: 'Extremly'}, 
        {id: 'Content', title: 'Based on the decription/my expectaions, the content was', low: 'Too basic', high: 'Too advanced'},
        {id: 'Quality', title: 'Speaker quality', low: 'Poor', high: 'Outstanding'}, 
        {id: 'Comment', title: 'Any other comments'}
      ],
      feedbackData: this.props.feedbackData
    };
    this.props.addFeedback(
      {sessionId : this.props.navigation.state.params.sessionData.sessionId,
        eventId: this.props.navigation.state.params.sessionData.conferenceId
       }
      )
  }


  componentWillMount() {
    this.displayError(this.props.message)

  }

  okPressed(error) {
    this.props.removeError(error);
  }

  displayError(message) {
    if(message) {
      let msg = message;
      if(message.error) {
        msg = 'Ops! Something happend while sending feedback'
      } else if(message.feedbackId) {
        msg = 'Feedback sendt'
      }
      this.refs.feedbackToast.show(msg, DURATION.LENGTH_LONG);  
      this.props.removeError(message);
    }
  }
  
  render() {
    const { params } = this.props.navigation.state;
    let { submitFeedback, feedbackData, errors, sessionData, navigation } = this.props;
    this.displayError(this.props.message)
    const feedbackCriteriaList = this.state.categories.map(category => {
      if(category.id === 'Comment') {
        return (
        <View style={styles.commentContainer} key={category.id}>   
          <TextInput 
            placeholder={category.title}
            placeholderTextColor={style.colors.primary}
            style={styles.commentInput}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
        </View>);
      } else {
        return (
          <FeedbackCriteria 
            key={category.id}
            category={category}
            feedbackData={feedbackData}
            sessionData={params.sessionData}
            selectedScore={(score) => this.props.updateFeedback(score)}
          />
        )
      }
    })

    return (
      <View style={styles.container}>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <Icon name="arrow-left" style={{ padding: 15 }} size={40} color={style.colors.color4}
                onPress={() => navigation.goBack()} />
            <Text style={styles.h1}>{params.sessionData.title}</Text>

          </View>
          
          {feedbackCriteriaList}
          <Toast 
            ref="feedbackToast" 
            style={{backgroundColor: style.colors.color4}}
            position='top'/>
          <TouchableHighlight
            underlayColor='black'
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
          ios: { paddingTop: 10 }
        }),
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    commentContainer: {
      flex: 1,
      flexDirection: 'row',
    },
    commentInput: {
      height: 30, 
      flex: 1, 
      borderBottomColor: style.colors.color1, 
      borderBottomWidth: 1, 
      color: style.colors.primary, 
      marginRight: 10, 
      marginLeft: 10,
      fontSize: 13
    },
    backBtn : {
      alignSelf: 'flex-start',
      margin: 10
    },
    submitBtn: {
      height: 30,
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 30,
      paddingRight: 30,
      borderWidth: 1,
      borderColor: style.colors.color4,
      marginBottom: 10
    },
    submitBtnText: {
      color: style.colors.color4
    },
    h1 : {
       fontSize: 18,
       color: style.colors.color1,
       width: 300,
       alignSelf: 'center', 
       
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
    message : state.feedback.message
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