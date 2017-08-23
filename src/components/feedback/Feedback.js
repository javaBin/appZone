import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import style from '../../common/style'
import Toast, { DURATION } from 'react-native-easy-toast'

import { FeedbackCriteria } from './FeedbackCriteria'
import * as feedbackAction from '../../actions/feedback'

import { connect } from 'react-redux'

class Feedback extends Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.onChangeText = this.onChangeText.bind(this)
  }


  componentWillMount() {
    this.props.addFeedback(
      { sessionId : this.props.navigation.state.params.sessionData.sessionId,
        eventId: this.props.navigation.state.params.sessionData.conferenceId
      })
  }
    
  componentDidUpdate() {
    this.displayError(this.props.message)
  }
  
  displayError(message) {
    if(message) {
      let msg = message
      if(message.error) {
        msg = 'Ops! Something happend while sending feedback'
      } else if(message.feedbackId) {
        msg = 'Feedback sendt'
      }
      this.feedbackToast.show(msg, DURATION.LENGTH_LONG)  
      this.props.removeError(message)
    }
  }
  onChangeText(text) {
    this.setState({ text })
  }
  
  render() {
    const { params } = this.props.navigation.state
    let { submitFeedback, feedbackData, navigation, feedbackCriteria } = this.props
    const feedbackCriteriaList = feedbackCriteria.map(criteria => {
      if(criteria.id === 'Comment') {
        return (
        <View style={ styles.commentContainer } key={ criteria.id }>   
          <TextInput 
            placeholder={ criteria.title }
            placeholderTextColor={ style.colors.primary }
            style={ styles.commentInput }
            onChangeText={ this.onChangeText }
            value={ this.state.text }
          />
        </View>)
      } else {
        return (
          <FeedbackCriteria 
            key={ criteria.id }
            criteria={ criteria }
            feedbackData={ feedbackData }
            sessionData={ params.sessionData }
            selectedScore={ (score) => this.props.updateFeedback(score) }
          />
        )
      }
    })

    return (
      <ScrollView style={{ backgroundColor: style.colors.background }}> 
        <View style={ styles.container }>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            <Icon name="arrow-left" style={{ padding: 15 }} size={ 40 } color={ style.colors.color4 }
                onPress={() => navigation.goBack()} />
            <Text style={styles.h1}>{params.sessionData.title}</Text>

          </View>
          
          {feedbackCriteriaList}
          <Toast 
            ref={(c) => { this.feedbackToast = c }} 
            style={{ backgroundColor: style.colors.color4 }}
            position='top'/>
          <Button
            color={ style.colors.color4 }
            style={ styles.submitBtn }
            title='Submit feedback'
            onPress={()=> {
              let comment = this.state.text
              let feedback = feedbackData.feedback.filter((f) => {
                return f.sessionId=== params.sessionData.sessionId
              }).reduce((acc, curr)=>{ 
                    return Object.assign(acc, { ...curr })
              }, {})
              submitFeedback(Object.assign({}, { ...feedback, feedback: Object.assign({}, { ...feedback.feedback }, { comment }) }))
            }}
          >
          </Button>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: style.colors.background,
    },
    commentContainer: {
      flexDirection: 'row',
      alignSelf: 'stretch',
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10
    },
    commentInput: {
      height: 40, 
      flex: 1, 
      borderBottomColor: style.colors.color1, 
      borderBottomWidth: 1, 
      color: style.colors.primary, 
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
      borderColor: style.colors.color4,
      color: 'white',
      marginBottom: 10,
    },
    submitBtnText: {
      color: 'white',
      marginTop: 10,
      backgroundColor: style.colors.color4
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
})

const mapStateToProps = (state) => { 
  return {  
    feedbackData: state.feedback,
    message : state.feedback.message,
    feedbackCriteria: state.feedback.feedbackCriteria
  }
}

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
  } 
}
export default connect(mapStateToProps, mapDispatchToProps)(Feedback)