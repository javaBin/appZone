import React from 'react';
import { StyleSheet, View } from 'react-native';

import SettingsScreen from './settings/SettingsScreen';

const App = () => (
    <TabBarNavigation style={styles.container}/>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

export default App
