import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import style from '../../common/style'

import FeedbackScoreBtn from './FeedbackScoreBtn';

export class FeedbackCriteria extends Component {
  constructor(props) {
    super(props);
    console.log('feedback criteria', this.props)
    this.state = {
      id: this.props.category.id,
      titleText: this.props.category.title,
      low: this.props.category.low,
      high: this.props.category.high,
      feedback: this.props.feedbackData,
      session : this.props.sessionData,
      maxStars: 5
    };
    this.onButtonPress = this.onButtonPress.bind(this);
    this.selecte = this.selected.bind(this);
  }

  onButtonPress = (score) => {
    console.log('score obj feedback criteria', score)
    const scoreObj = Object.assign({}, 
    { [this.state.id.toLowerCase()] : score, 
      sessionId: this.state.session.sessionId})
    this.props.selectedScore(scoreObj);
  }

  selected(score, feedbackData) {

    const selectedFeedback = feedbackData.feedback.filter(f => f.sessionId === this.props.sessionData.sessionId)
    return selectedFeedback[0] ? selectedFeedback[0][this.props.category.id.toLowerCase()] == score : false;
  }

  render() {
    let scoreButtons = [];
    for(let i = 0; i < this.state.maxStars; i++) {
      scoreButtons.push(
        <FeedbackScoreBtn
          score={'' +(i + 1)}
          selected={this.selected((i + 1),this.props.feedbackData)}
          onScoreButtonPress={this.onButtonPress}
        />
      );
    }

    return (
        <View style={styles.container}>
          <Text style={styles.h2}>{this.state.titleText}</Text>
          <View style={styles.scoreContainer}>
             {scoreButtons}
          </View>
          <View style={styles.gradingContainer}>
            <Text style={styles.grading}>{this.state.low}</Text>
            <Text style={styles.grading}>{this.state.high}</Text>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    h2: {
        fontSize: 13,
        color: style.colors.primary,
        marginBottom: 10    
    },
    scoreContainer: {
        flexDirection: 'row'
    },
    gradingContainer: {
      marginTop: 5,
      alignSelf: 'stretch',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    grading: {
      fontSize: 12,
      color: style.colors.color3
    }
});