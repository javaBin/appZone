<<<<<<< 55255650cd5d9c2dd5625f97fd421b780896abc4
<<<<<<< ff05c1e5cc0b1b65a441d7f53bf4491edc643e7f
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapScreen from './maps/MapScreen';
import VideoScreen from './video/VideoScreen';

const App = () => (
    <View style={styles.container}>
      <VideoScreen />
    </View>
=======
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
=======
import React from 'react';
import { StyleSheet, View } from 'react-native';
>>>>>>> fixed lint errors

import SettingsScreen from './settings/SettingsScreen';

const App = () => (
<<<<<<< 37e1b4a0047fe66caacc1a763585e2780d6b0588
  <View style={styles.container}>
    <SettingsScreen />
  </View>
>>>>>>> added small function to settings, will add asynstorage
=======
    <TabBarNavigation style={styles.container}/>
>>>>>>> added router for android
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
