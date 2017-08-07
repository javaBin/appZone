import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';

import FeedbackScoreBtn from './FeedbackScoreBtn';

export class FeedbackCriteria extends Component {
  constructor(props) {
    super(props);
    console.log('feedback criteria', this.props)
    this.state = {
      titleText: this.props.title,
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
    { [this.state.titleText.toLowerCase()] : score, 
      sessionId: this.state.session.sessionId})
    this.props.selectedScore(scoreObj);
  }

  selected(score, feedbackData) {

    const selectedFeedback = feedbackData.feedback.filter(f => f.sessionId === this.props.sessionData.sessionId)
    return selectedFeedback[0] ? selectedFeedback[0][this.props.title.toLowerCase()] == score : false;
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
          <Text>{this.state.session.sessionTile}</Text>
          <View style={styles.scoreContainer}>
             {scoreButtons}
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    h2: {
        fontSize: 20,
        textAlign: 'center',
        color: '#666666'    
    },
    scoreContainer: {
        flexDirection: 'row'
    }
});