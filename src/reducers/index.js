// @flow

<<<<<<< 16be030b656664568267d3793bb24420e7de3836
import { combineReducers } from 'redux'
=======
import { CONFERENCES } from '../actions/conference'
import { SESSIONS } from '../actions/session'
import { DAY } from '../actions/filter'
import settings from './settings'
import type { Session, Conference } from '../types/SleepingPill'
import type {   PayloadAction } from '../types/Actions'
import settings from './settings'

>>>>>>> Session feedback. WIP

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
}

const feedbackInit = {feedbackList: []}

const feedback = (state = feedbackInit, action) => {
  switch (action.type) {
    case FEEDBACK.GET: 
      return {...state, feedback}
    case FEEDBACK.ADD:
      return {...state, feedbackList: [...state.feedbackList, action.payload]}
    case FEEDBACK.SUBMIT:

      return {...state}
    default:
      return state
  }
}



const reducers = combineReducers({
  conferences, 
  sessions,
  settings,
  filter,
  feedback,
  tabBar: tabBarReducer,
})

export default reducers