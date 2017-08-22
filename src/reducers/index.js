// @flow

import { combineReducers } from 'redux'

import settings from './settings'
import sessions from './sessions'
import conferences from './conferences'
import { FIREBASE_EVENT } from '../actions/firebase'
import filter from './filter'
import { tabBarReducer } from '../components/tab-bar-navigation/navigationConfiguration'

import type { SessionState } from './sessions'
import type { ConferencesState } from './conferences'
import type { FilterState } from './filter'
import type { SettingsState } from './settings'

import firebase from '../components/firebase/Firebase'

/**
 * Each sub reducer will have it's own sub name space. For instance the conferences
 * reducer will be accessible from `<root>.conferences`.
 *
 * To make it easier to understand how the store is build up we have a flow type
 * `StoreState` that describe the expected store.
 *
 */

export type StoreState = {
  conferences: ConferencesState,
  session: SessionState,
  filter: FilterState,
  settings: SettingsState,
  tabBar: any
}

const firebaseInit = { analytics: null, }


const firebaseEvents = (state = firebaseInit, action) => {
  switch (action.type) {
    case FIREBASE_EVENT.CURRENT_USER: {
      const userName = action.payload.nickName
      const value = action.payload.value
      firebase.analytics().setUserProperty(userName, value)
      return action.payload
    }
    case FIREBASE_EVENT.CURRENT_SCREEN: {
      firebase.analytics().setCurrentScreen(action.payload.screenName, action.payload.screenClassOverride)
      return action.payload
    }
    case FIREBASE_EVENT.LOG_EVENT: {
      console.warn("in log")
      const event = action.payload.eventName
      const params = action.payload.params
      firebase.analytics().logEvent(event, params)
      return action.payload
    }
    case FIREBASE_EVENT.LOG_CRASH: {
      console.warn("in crash", action.payload.msg, action.payload.errorMessage)
      firebase.crash().log(action.payload.msg)
      firebase.crash().report(action.payload.errorMessage)
      return action.payload
    }
    default:
      return state
  }
}

const reducers = combineReducers({
  conferences, 
  sessions,
  settings,
  filter,
  firebaseEvents,
  tabBar: tabBarReducer,
})

export default reducers
