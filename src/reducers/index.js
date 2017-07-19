// @flow

import { combineReducers } from 'redux'

import settings from './settings'
import sessions from './sessions'
import conferences from './conferences'
import filter from './filter'

//Navigation
import { SessionNavigatorTab } from '../components/sessions/navigationConfiguration'
import { HomeNavigatorTab } from '../components/home/navigationConfiguration'
import { SettingsNavigatorTab } from '../components/settings/navigationConfiguration'
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