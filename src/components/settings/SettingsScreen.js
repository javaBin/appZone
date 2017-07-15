'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  StatusBar,
  Switch,
  Text,
  View,
  StyleSheet,
  AsyncStorage,
  Dimensions
} from 'react-native'

let ScreenHeight = Dimensions.get("window").height

import * as settings from '../../actions/settings'

const STORE_SETTINGS_KEY = 'SETTINGSKEY'

class SettingsScreen extends React.Component {
  componentWillMount() {
    AsyncStorage.getItem(STORE_SETTINGS_KEY).then((settingsStr) => {
      if (!settingsStr) {
        AsyncStorage.setItem(STORE_SETTINGS_KEY, JSON.stringify({}))
      } else {
        const settingsJson = JSON.parse(settingsStr)
        this.loadSettings(settingsJson)
      }
    })
  }

  static propTypes = {
    dispatch: PropTypes.func,
    notificationSession: PropTypes.bool,
    notificationFeedback: PropTypes.bool
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <View style={styles.switchWrapper}>
          <Text style={styles.option}>Notify me about sessions that are about to begin</Text>
          <Switch
            accessibilityLabel="Notify me about sessions that are about to begin"
            style={styles.switch}
            value={!!this.props.notificationSession}
            onValueChange={(enabled) => this.setNotificationSessionSwitch(enabled)}
          />
        </View>
        <View style={styles.switchWrapper}>
          <Text style={styles.option}>Notify me to send feedback</Text>
          <Switch
            accessibilityLabel="Notify me to send feedback"
            style={styles.switch}
            value={!!this.props.notificationFeedback}
            onValueChange={(enabled) => this.setNotificationFeedbackSwitch(enabled)}
          />
        </View>
      </View>
    )
  }

  setNotificationSessionSwitch(enabled) {
    this.props.dispatch(settings.setNotificationSession(enabled))
  }

  setNotificationFeedbackSwitch(enabled) {
    this.props.dispatch(settings.setNotificationFeedback(enabled))
  }

  loadSettings(settingsJson) {
    this.props.dispatch(settings.loadSettings(settingsJson))
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    flexDirection: 'column',
    left: 0,
    right: 0,
    top: 0,
    marginTop: 16,
    alignItems: 'center',
    backgroundColor: 'white',
    height: ScreenHeight
  },
  switchWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  switch: {
    margin: 10
  },
  option: {
    fontSize: 16,
    flexWrap: 'wrap',
    flex: 0.8,

  }
})

function select(store) {
  return {
    notificationSession: store.settings.notificationSession,
    notificationFeedback: store.settings.notificationFeedback
  }
}

export default connect(select)(SettingsScreen)