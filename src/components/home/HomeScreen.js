import React from 'react';
import { Text, View } from 'react-native'; 
import { connect } from 'react-redux';

export default class HomeScreen extends React.Component {
  render() {
    return (
        <View>
          <Text>{ 'Hjemme' }</Text>
        </View>
    )
  }
}