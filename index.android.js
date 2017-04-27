import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import SessionsScreen from './src/components/sessions/SessionsScreen';
import FeedbackScreen from './src/components/feedback/FeedbackScreen';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'JavaZone 2017',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
        <View>
            <Button 
                onPress={() => navigate('Sessions')}
                title="List sessions"
            />
            <Button 
                onPress={() => navigate('Feedback')}
                title="Feedback"
              />
        </View>
    )
  }
}

const appZone = StackNavigator ({
    Home: { screen: HomeScreen },
    Sessions: { screen: SessionsScreen }, 
    Feedback: { screen: FeedbackScreen }
});

AppRegistry.registerComponent('appZone', () => appZone);
