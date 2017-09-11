import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, BackHandler } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import style from '../../common/style'
import Toast, { DURATION } from 'react-native-easy-toast'

import { FeedbackCriteria } from './FeedbackCriteria'
import * as feedbackAction from '../../actions/feedback'
import { getUUID } from '../../actions/uuid'

import { connect } from 'react-redux'

class Feedback extends Component {
  static propTypes = {
    addFeedback: PropTypes.func,
    updateFeedback: PropTypes.func,
    removeError: PropTypes.func,
    submitFeedback: PropTypes.func,
    getUUID: PropTypes.func,
    uuid: PropTypes.string,
    message: PropTypes.object,
    feedbackData: PropTypes.object,
    feedbackCriteria: PropTypes.array,
    navigation: PropTypes.object,
    navigationState: PropTypes.object
  }

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
    this.props.getUUID()
    BackHandler.addEventListener("hardwareBackPress", () => {
      let routeIndex = this.props.navigationState.index
      let nestedNavigation = this.props.navigationState.routes[routeIndex].routes.length > 1
      if(nestedNavigation) {
        this.props.navigation.goBack()
        return true
      }
      return false
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
      } else if(message.message) {
        msg = message.message
      }
      this.feedbackToast.show(msg, DURATION.LENGTH_LONG)  
      this.props.removeError(message)
    }
  }
  onChangeText(text) {
    this.setState({ text })
  }
  sumbitFeedbackPressed({ params, props }) {
    const { feedbackData, submitFeedback, uuid, messageToUser } = props
    let comments = this.state.text
    let feedback = feedbackData.feedback.filter((f) => {
      return f.sessionId=== params.sessionData.sessionId
    }).reduce((acc, curr)=>{ 
          return Object.assign(acc, { ...curr })
    }, {})

    const tempFeedback = Object.assign({}, { ...feedback.feedback }, { comments })  

    if(!(tempFeedback.content && tempFeedback.overall && tempFeedback.quality && tempFeedback.relevance)) {
      messageToUser({ message: 'Please provide a score to all questions' })
    } else {
      submitFeedback(Object.assign({}, { ...feedback, feedback: tempFeedback, uuid }))
    }
  }

  render() {
    const { params } = this.props.navigation.state
    let { feedbackData, navigation, feedbackCriteria } = this.props
    const feedbackCriteriaList = feedbackCriteria.map(criteria => {
      if(criteria.id === 'Comments') {
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
            selectedScore={ (score) => {
              this.props.updateFeedback(score) }}
          />
        )
      }
    })

    return (
      <View style={styles.scrollViewContainer}>
      <ScrollView contentContainerStyle = {styles.homeContainerScroll}> 
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
            position='center'/>
          <TouchableOpacity
            style={ styles.submitBtn }
            title='Submit feedback'
            accessibilityLabel="Send feedback for this session"
            onPress={()=> {
              this.sumbitFeedbackPressed({ params, props: this.props })
            }}
          >
            <Text style={styles.submitBtnText}>Submit feedback</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scrollViewContainer : {
    flex: 1,
  },
  homeContainerScroll: {
    flexGrow: 1,
  },
  container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: style.colors.background,
    },
    commentContainer: {
      flexDirection: 'row',
      alignSelf: 'stretch',
      marginTop: 5,
      marginLeft: 10,
      marginRight: 10
    },
    commentInput: {
      height: 40, 
      flex: 1, 
      borderBottomColor: style.colors.color1, 
      borderBottomWidth: 1, 
      color: style.colors.primary, 
      fontSize: 16
    },
    backBtn : {
      alignSelf: 'flex-start',
      margin: 10
    },
    submitBtn: {
      height: 50,
      paddingTop: 10,
      paddingBottom: 5,
      paddingLeft: 30,
      paddingRight: 30,
      margin: 10,
    },
    submitBtnText: {
      color: style.colors.color4,
      fontSize: 24
    },
    h1 : {
       fontSize: style.fontSizes.heading3,
       color: style.colors.color1,
       width: 300,
       alignSelf: 'center', 
       
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
    feedbackCriteria: state.feedback.feedbackCriteria,
    uuid: state.uuid.uuid,
    navigationState: state.tabBar
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
    messageToUser : (message) => {
      dispatch(feedbackAction.feedbackMessageToUser(message))
    },
    removeError: (error) => {
      dispatch(feedbackAction.removeError(error))
    },
    getUUID : () => {
      dispatch(getUUID())
    }
  } 
}
export default connect(mapStateToProps, mapDispatchToProps)(Feedback)