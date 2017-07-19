// @flow

import { combineReducers } from 'redux'
import { CONFERENCES } from '../actions/conference'
import { SESSIONS } from '../actions/session'
import { DAY } from '../actions/filter'
import settings from './settings'
import type { Session, Conference } from '../types/SleepingPill'
import type {   PayloadAction } from '../types/Actions'

//Navigation
import { SessionNavigatorTab } from '../components/sessions/navigationConfiguration'
import { HomeNavigatorTab } from '../components/home/navigationConfiguration'
import { SettingsNavigatorTab } from '../components/settings/navigationConfiguration'
import { tabBarReducer } from '../components/tab-bar-navigation/navigationConfiguration'

const conferenceInit = { all: [], selected: "javazone_2016" }

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
    return  {
      ...state,
      selectedDay: action.day
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
  tabBar: tabBarReducer,

  tabSession: (state, action) =>
  SessionNavigatorTab.router.getStateForAction(action,state),

  tabSettings : (state, action) =>
  SettingsNavigatorTab.router.getStateForAction(action,state),

  tabHome: (state, action) =>
  HomeNavigatorTab.router.getStateForAction(action,state)
})

export default reducers