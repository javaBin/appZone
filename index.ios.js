import React, { Component } from 'react';
import { AppRegistry, View , StatusBar } from 'react-native';
import Main from './src/Main';
import RatingScreen from './src/components/rating/RatingScreen';
import Navigator from './src/common/Navigator';

export default class appZone extends Component {
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
