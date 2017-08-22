export const FIREBASE_EVENT = {
  CURRENT_SCREEN: 'CURRENT_SCREEN',
  CURRENT_USER: 'CURRENT_USER',
  LOG_EVENT: 'LOG_EVENT',
  LOG_CRASH: 'LOG_CRASH'
}

export const setCurrentScreen = (screenName, screenClassOverride) => (
  { type: FIREBASE_EVENT.CURRENT_SCREEN, payload: { screenName, screenClassOverride } }
)

export const setCurrentUser = (nickName, value) => (
  { type: FIREBASE_EVENT.CURRENT_USER, payload: { nickName, value } }
)

export const logEvent = (eventName, params) => (
  { type: FIREBASE_EVENT.LOG_EVENT, payload: { eventName, params } }
)

export const logCrash = (msg, errorMessage) => (
  { type: FIREBASE_EVENT.LOG_CRASH, payload: { msg, errorMessage } }
)

