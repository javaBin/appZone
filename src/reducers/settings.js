'use strict';

import { AsyncStorage } from 'react-native';
import { SETTINGS } from '../actions/settings';

var STORE_SETTINGS_KEY = 'SETTINGSKEY';

export type Settings = {
  notificationSession: boolean,
  notificationFeedback: boolean
};

const initialState: Settings = {
  notificationSession: false,
  notificationFeedback: false
};

export default function settings(state = initialState, action) {
  switch (action.type) {
    case SETTINGS.SET_NOTIFICATION_SESSION:
      storeSettings(action.type, action.payload);
      return { ...state, notificationSession: action.payload };
    case SETTINGS.SET_NOTIFICATION_FEEDBACK:
      storeSettings(action.type, action.payload);
      return { ...state, notificationFeedback: action.payload };
    case SETTINGS.GET_NOTIFICATION_CONFIG:
      var config = action.payload;
      return {
        ...state,
        notificationSession: config.notificationSession,
        notificationFeedback: config.notificationFeedback
      }
  }

return state;
}

function storeSettings(type, enabled) {
  let settings = {
    notificationSession: false,
    notificationFeedback: false
  };
  AsyncStorage.getItem(STORE_SETTINGS_KEY).then((settingsStr) => {
    settings = JSON.parse(settingsStr);
    if (settings != null) {
      switch (type) {
        case SETTINGS.SET_NOTIFICATION_SESSION:
          settings.notificationSession = enabled;
          break;
        case SETTINGS.SET_NOTIFICATION_FEEDBACK:
          settings.notificationFeedback = enabled
          break;
      }

      AsyncStorage.setItem(STORE_SETTINGS_KEY, JSON.stringify(settings), () => {
      });

    }
    else {
      switch (type) {
        case SETTINGS.SET_NOTIFICATION_SESSION:
          settings.notificationSession = enabled;
          break;
        case SETTINGS.SET_NOTIFICATION_FEEDBACK:
          settings.notificationFeedback = enabled;
          break;
      }

      AsyncStorage.setItem(STORE_SETTINGS_KEY, JSON.stringify(settings), () => {
      });
    }
  });
}

module.exports = settings;
