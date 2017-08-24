// @flow

import { AsyncStorage } from 'react-native'
import { SETTINGS } from '../actions/settings'

import type { LoadedSettings } from '../actions/settings'

const STORE_SETTINGS_KEY = 'SETTINGSKEY'

export type SettingsState = {
  notificationSession: boolean,
  notificationFeedback: boolean,
  highContrastMode: boolean
};

const initialState: SettingsState = {
  notificationSession: false,
  notificationFeedback: false,
  highContrastMode: false
}

type Actions = {
  type: 'GET_NOTIFICATION_CONFIG',
  payload: LoadedSettings
} | {
  type: 'SET_NOTIFICATION_SESSION',
  payload: boolean
} | {
  type: 'SET_NOTIFICATION_FEEDBACK',
  payload: boolean
} | {
  type: 'SET_HIGH_CONTRAST_MODE',
  payload: boolean
}

export default function settings(state: SettingsState = initialState, action: Actions) {
  switch (action.type) {
    case SETTINGS.SET_NOTIFICATION_SESSION:
      storeSettings(action.type, action.payload)
      return { ...state, notificationSession: action.payload }
    case SETTINGS.SET_NOTIFICATION_FEEDBACK:
      storeSettings(action.type, action.payload)
      return { ...state, notificationFeedback: action.payload }
    case SETTINGS.SET_HIGH_CONTRAST_MODE:
      storeSettings(action.type, action.payload)
      return { ...state, highContrastMode: action.payload }
    case SETTINGS.GET_NOTIFICATION_CONFIG: {
      const config = action.payload
      return {
        ...state,
        notificationSession: config.notificationSession,
        notificationFeedback: config.notificationFeedback,
        highContrastMode: config.highContrastMode
      }
    }
    default:
      break
  }

  return state
}

function storeSettings(type, enabled) {
  let settings: LoadedSettings = {
    notificationSession: false,
    notificationFeedback: false,
    highContrastMode: false
  }
  AsyncStorage.getItem(STORE_SETTINGS_KEY).then((settingsStr) => {
    settings = JSON.parse(settingsStr)
    if (settings !== null) {
      switch (type) {
        case SETTINGS.SET_NOTIFICATION_SESSION:
          settings.notificationSession = enabled
          break
        case SETTINGS.SET_NOTIFICATION_FEEDBACK:
          settings.notificationFeedback = enabled
          break
        case SETTINGS.SET_HIGH_CONTRAST_MODE:
          settings.highContrastMode = enabled
          break
        default:
          break
      }

      AsyncStorage.setItem(STORE_SETTINGS_KEY, JSON.stringify(settings), () => {
      })
    }
    else {
      switch (type) {
        case SETTINGS.SET_NOTIFICATION_SESSION:
          settings.notificationSession = enabled
          break
        case SETTINGS.SET_NOTIFICATION_FEEDBACK:
          settings.notificationFeedback = enabled
          break
        case  SETTINGS.SET_HIGH_CONTRAST_MODE:
          settings.highContrastMode = enabled
          break
        default:
          break
      }

      AsyncStorage.setItem(STORE_SETTINGS_KEY, JSON.stringify(settings), () => {
      })
    }
  })
}
