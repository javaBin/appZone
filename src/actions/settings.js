// @flow

import type { PayloadAction } from '../types/Actions'

export type LoadedSettings = {
  notificationSession: boolean,
  notificationFeedback: boolean,
  highContrastMode: boolean
}

export const SETTINGS = {
  SET_NOTIFICATION_SESSION: 'settings:setNotificationSession',
  SET_NOTIFICATION_FEEDBACK: 'settings:setNotificationFeedback',
  SET_HIGH_CONTRAST_MODE: 'settings:setHighContrastMode',
  GET_NOTIFICATION_CONFIG: 'settings:loadNotificationConfig'
}

export type SetNotificationSessionAction = PayloadAction<'settings:setNotificationSession', boolean>
export function setNotificationSession(enabled: boolean): SetNotificationSessionAction  {
  return {
    type: SETTINGS.SET_NOTIFICATION_SESSION,
    payload: enabled
  }
}

export type SetNotificationFeedbackAction = PayloadAction<'settings:setNotificationFeedback', boolean>
export function setNotificationFeedback(enabled: boolean): SetNotificationFeedbackAction {
  return {
    type: SETTINGS.SET_NOTIFICATION_FEEDBACK,
    payload: enabled
  }
}

export type setHighContrastMode = PayloadAction<'settings:setHighContrastMode', boolean>
export function setHighContrastMode(enabled: boolean): setHighContrastMode {
  return {
    type: SETTINGS.SET_HIGH_CONTRAST_MODE,
    payload: enabled
  }
}

export type LoadSettingsAction = PayloadAction<'settings:loadNotificationConfig', LoadedSettings>
export function loadSettings(settingsLoaded: LoadedSettings): LoadSettingsAction {
  return {
    type: SETTINGS.GET_NOTIFICATION_CONFIG,
    payload: settingsLoaded
  }
}

