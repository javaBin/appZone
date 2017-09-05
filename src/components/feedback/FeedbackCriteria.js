import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'
import style from '../../common/style'

import FeedbackScoreBtn from './FeedbackScoreBtn'

export class FeedbackCriteria extends Component {
  static propTypes = {
    selectedScore: PropTypes.func,
    feedbackData: PropTypes.object,
    sessionData: PropTypes.object,
    criteria: PropTypes.object
  }

  constructor(props) {
    super(props)
    this.state = {
        maxStars: 5
      }
    this.onButtonPress = this.onButtonPress.bind(this)
    this.selecte = this.selected.bind(this)
  }

  onButtonPress = (score) => {
    const scoreObj = Object.assign({}, 
    { feedback: { [this.props.criteria.id.toLowerCase()] : parseInt(score) }, 
      sessionId: this.props.sessionData.sessionId })
    this.props.selectedScore(scoreObj)
  }

  selected(score, feedbackData) {
    const selectedFeedback = feedbackData.feedback.filter(f => f.sessionId === this.props.sessionData.sessionId)
    return selectedFeedback[0] ? 
      (selectedFeedback[0].feedback ? selectedFeedback[0].feedback[this.props.criteria.id.toLowerCase()] == score : false) : false
  }

  render() {      
    let { criteria } = this.props
    let scoreButtons = []
    for(let i = 0; i < this.state.maxStars; i++) {
      scoreButtons.push(
        <FeedbackScoreBtn
          key={i}
          score={(i + 1)}
          selected={ this.selected((i + 1),this.props.feedbackData) }
          onScoreButtonPress={ this.onButtonPress }
        />
      )
    }

    return (
        <View style={ styles.container }>
          <Text style={ styles.h2 }>{ criteria.title }:</Text>
          <View style={ styles.scoreContainer }>
             { scoreButtons }
          </View>
          <View style={ styles.gradingContainer }>
            <Text style={ styles.grading }>{ criteria.low }</Text>
            <Text style={ styles.grading }>{ criteria.high }</Text>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        paddingBottom: 10,
    },
    h2: {
        fontSize: 16,
        color: style.colors.primary,
        marginBottom: 10    
    },
    scoreContainer: {
        flexDirection: 'row',
        alignSelf: 'stretch'
    },
    gradingContainer: {
      marginTop: 5,
      alignSelf: 'stretch',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    grading: {
      fontSize: 12,
      color: style.colors.color1
    }
})