// @flow

import type { PayloadAction } from '../types/Actions'

export type LoadedSettings = {
  notificationSession: boolean,
  notificationFeedback: boolean
}

export const SETTINGS = {
  SET_NOTIFICATION_SESSION: 'SET_NOTIFICATION_SESSION',
  SET_NOTIFICATION_FEEDBACK: 'SET_NOTIFICATION_FEEDBACK',
  GET_NOTIFICATION_CONFIG: 'GET_NOTIFICATION_CONFIG'
}

export function setNotificationSession(enabled: boolean): PayloadAction<boolean>  {
  return {
    type: SETTINGS.SET_NOTIFICATION_SESSION,
    payload: enabled
  }
}

export function setNotificationFeedback(enabled: boolean): PayloadAction<boolean> {
  return {
    type: SETTINGS.SET_NOTIFICATION_FEEDBACK,
    payload: enabled
  }
}

export function loadSettings(settingsLoaded: LoadedSettings): PayloadAction<LoadedSettings> {
  return {
    type: SETTINGS.GET_NOTIFICATION_CONFIG,
    payload: settingsLoaded
  }
}

