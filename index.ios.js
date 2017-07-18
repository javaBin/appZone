<<<<<<< aceee3b55e2e5388c5edd555226796ccff21ad2c
<<<<<<< 4ac625ef1c7a30dbf3fda8d6432e2aee4b8b621f
import React, { Component } from 'react';
import { AppRegistry, View, StatusBar } from 'react-native';
import Main from './src/Main';
import RatingScreen from './src/components/rating/RatingScreen';
import Navigator from './src/common/Navigator';
import { postFeedbackTest } from './src/common/rating/RatingApi';

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
=======
import { AppRegistry } from 'react-native'
import Main from './src/Main'

AppRegistry.registerComponent('appZone', () => Main)
>>>>>>> refactor: simplify the startup files for ios and android
=======
import { AppRegistry } from 'react-native'
import Main from './src/Main'

AppRegistry.registerComponent('appZone', () => Main)
>>>>>>> merged
