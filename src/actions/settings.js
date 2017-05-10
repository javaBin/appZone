import { AsyncStorage } from 'react-native';

export const SETTINGS = {
  SET_NOTIFICATION_SESSION: 'SET_NOTIFICATION_SESSION',
  SET_NOTIFICATION_FEEDBACK: 'SET_NOTIFICATION_FEEDBACK',
  GET_NOTIFICATION_CONFIG: 'GET_NOTIFICATION_CONFIG'
};

var STORE_SETTINGS_KEY = '@Settings:key';

export function setNotificationSession(enabled) {
  console.warn("Inside Notification");
  return {
    type: SETTINGS.SET_NOTIFICATION_SESSION,
    payload: enabled
  }
}

export function setNotificationFeedback(enabled) {
  return {
    type: SETTINGS.SET_NOTIFICATION_FEEDBACK,
    payload: enabled
  }
}

export async function loadSettings() {
  const config = await AsyncStorage.getItem(STORE_SETTINGS_KEY, (err, result) => {
    console.log(result);
  });
  return {
    type: SETTINGS.GET_NOTIFICATION_CONFIG,
    config
  }
}

