// @flow

import { combineReducers } from 'redux'
import { CONFERENCES } from '../actions/conference'
import { SESSIONS } from '../actions/session'
import { DAY } from '../actions/conferenceDays'
import settings from './settings'
import type { Sessions } from '../types/SleepingPill'

//Navigation
import { SessionNavigatorTab } from '../components/sessions/navigationConfiguration'
import { HomeNavigatorTab } from '../components/home/navigationConfiguration'
import { SettingsNavigatorTab } from '../components/settings/navigationConfiguration'
import { tabBarReducer } from '../components/tab-bar-navigation/navigationConfiguration'

const conferenceInit = { all: [], selected: "javazone_2016" }

const conferences = (state = conferenceInit, action) => {
  switch (action.type) {
    case CONFERENCES.FETCH_SUCCESS:
      return { all: action.conferences }
    default:
      return state
  }
}

const sessions = (state: Sessions = [], action) => {
  switch (action.type) {
    case SESSIONS.FETCH_SUCCESS:
      return action.sessions
    default:
      return state
  }
}

const daysInit = {
  days: { day1: null, day2: null },
  selectedDay: null,
}

const conferenceDays = (state = daysInit, action) => {
  switch (action.type) {
    case DAY.SET_DAYS:
      return { 
        ...state, 
        days: action.days
      })
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
  conferenceDays,
  tabBar: tabBarReducer,

  tabSession: (state, action) =>
  SessionNavigatorTab.router.getStateForAction(action,state),

  tabSettings : (state, action) =>
  SettingsNavigatorTab.router.getStateForAction(action,state),

  tabHome: (state, action) =>
  HomeNavigatorTab.router.getStateForAction(action,state)
})

export default reducers