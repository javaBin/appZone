import React, { Component, PropTypes } from 'react';
import { NavigatorIOS, Text } from 'react-native';
import MyScene from './MyScene';

export default class Navigator extends Component {
  render() {
    return (
      <NavigatorIOS
        ref='nav'
        initialRoute={{
          component: MyScene,
          title: 'My Initial Scene',
        }}
        style={{flex: 1}}
      />
    );
  }
}