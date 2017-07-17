import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';

import FeedbackScoreBtn from './FeedbackScoreBtn';

export class FeedbackCriteria extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleText: this.props.title,
      session : this.props.sessionData,
      maxStars: 5
    };
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress = (score) => {
    console.log('score obj feedback criteria', score)
    const scoreObj = Object.assign({}, 
    { [this.state.titleText.toLowerCase()] : score, 
      sessionId: this.state.session.sessionId})
    this.props.selectedScore(scoreObj);
  }

  render() {
    
    let scoreButtons = [];

    for(let i = 0; i < this.state.maxStars; i++) {
      scoreButtons.push(
        <FeedbackScoreBtn
          score={'' +(i + 1)}
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