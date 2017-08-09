// @flow

import { combineReducers } from 'redux'
<<<<<<< HEAD

import settings from './settings'
import sessions from './sessions'
import conferences from './conferences'
import filter from './filter'
import { tabBarReducer } from '../components/tab-bar-navigation/navigationConfiguration'

import type { SessionState } from './sessions'
import type { ConferencesState } from './conferences'
import type { FilterState } from './filter'
import type { SettingsState } from './settings'

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
=======
import { CONFERENCES } from '../actions/conference'
import { SESSIONS } from '../actions/session'
import { FIREBASE_EVENT } from '../actions/firebase'
import { DAY } from '../actions/filter'
import settings from './settings'
import type { Session, Conference } from '../types/SleepingPill'
import type {   PayloadAction } from '../types/Actions'

import firebase from '../components/firebase/Firebase'

//Navigation
import { SessionNavigatorTab } from '../components/sessions/navigationConfiguration'
import { HomeNavigatorTab } from '../components/home/navigationConfiguration'
import { SettingsNavigatorTab } from '../components/settings/navigationConfiguration'
import { tabBarReducer } from '../components/tab-bar-navigation/navigationConfiguration'

const conferenceInit = { all: [], selected: "javazone_2016" }
const firebaseInit = { analytics: null, }

const conferences = (state = conferenceInit, action: PayloadAction<Array<Conference>>) => {
  switch (action.type) {
    case CONFERENCES.FETCH_SUCCESS:
      return { all: action.payload }
    default:
      return state
  }
}

const sessions = (state: Array<Session> = [], action: PayloadAction<Array<Session>>) => {
  switch (action.type) {
    case SESSIONS.FETCH_SUCCESS:
      return action.payload
    default:
      return state
  }
}

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

const daysInit = {
  days: { day1: null, day2: null },
  selectedDay: null,
}

const filter = (state = daysInit, action) => {
  switch (action.type) {
    case DAY.SET_DAYS:
      return {
        ...state,
        days: action.days
      }
    case DAY.SET_SELECTED_DAY:
      return {
        ...state,
        selectedDay: action.day
      }
    default:
      return state
  }
>>>>>>> working firebase, must adjust to crash, logs and events
}

const reducers = combineReducers({
  conferences,
  sessions,
  settings,
  filter,
  firebaseEvents,
  tabBar: tabBarReducer,
<<<<<<< HEAD
=======

  tabSession: (state, action) =>
    SessionNavigatorTab.router.getStateForAction(action, state),

  tabSettings: (state, action) =>
    SettingsNavigatorTab.router.getStateForAction(action, state),

  tabHome: (state, action) =>
    HomeNavigatorTab.router.getStateForAction(action, state)
>>>>>>> working firebase, must adjust to crash, logs and events
})

export default reducers