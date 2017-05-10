'use strict';

import { AsyncStorage } from 'react-native';
import { SET_NOTIFICATION_SESSION, SET_NOTIFICATION_FEEDBACK } from '../actions/settings';

var STORE_SETTINGS_KEY = '@Settings:key';

export type Settings = {
  notificationSession: boolean,
  notificationFeedback: boolean
};

const initialState: Settings = {
  notificationSession: false,
  notificationFeedback: false
};

export default function settings(state = initialState, action) {
  switch(action.type) {
    case SET_NOTIFICATION_SESSION:
      console.log('Hello notifications');
      break;
    case SET_NOTIFICATION_FEEDBACK: 
      console.log('hello feedback');
      break;
  }

  return state;
}

function storeSettings(action) {

}

module.exports = settings;