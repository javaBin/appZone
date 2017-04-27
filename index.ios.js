import React, { Component } from 'react';
import { AppRegistry, View, StatusBar } from 'react-native';
import Main from './src/Main';
import RatingScreen from './src/components/rating/RatingScreen';
import Navigator from './src/common/Navigator';
import { postFeedbackTest } from './src/sagas/FeedbackApi';

export default class appZone extends Component {

  testible() {
    var test = postFeedbackTest(
      {
        overall: 3,
        relevance: 2,
        content: 3,
        quality: 4,
        comment: "not bad"
      });
    console.log(test);
    return test;
  }

  componentDidMount() {
    this.testible();
  }

  render() {
    return (
      <View>
        <Navigator />
        <RatingScreen />
      </View>
    );
  }
}

AppRegistry.registerComponent('appZone', () => appZone);
