'use strict';

import React from 'react';
import { connect } from 'react-redux';
import {
  Platform,
  Switch,
  Text,
  View,
  StyleSheet,
  StatusBar
} from 'react-native';

import * as settings from '../../actions/settings';

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          barStyle="default"
        />
        <Switch
          accessibilityLabel="Notify me about sessions that are about to begin"
          style={styles.switch}
          value={!!this.props.notificationSession}
          onValueChange={(enabled) => this.setNotificationSessionSwitch(enabled)}
        />
      </View>
    )
  }

  setNotificationSessionSwitch(enabled) {
    this.props.dispatch(settings.setNotificationSession(enabled));
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 49
  },
  switchWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  switch: {
    margin: 10
  },
  option: {
    fontSize: 12
  }
});

function select(store) {
  return {
    notificationSession: store.settings.notificationSession,
    notificationFeedback: store.settings.notificationFeedback
  };
}

export default connect(select)(SettingsScreen);