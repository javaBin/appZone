// @flow
<<<<<<< 4ea13d9cfd4d95dda0828d359572dee6e0973d15

<<<<<<< 16be030b656664568267d3793bb24420e7de3836
import { combineReducers } from 'redux'
=======
=======
import {combineReducers} from 'redux'
>>>>>>> Selectable feedback. WIP
import { CONFERENCES } from '../actions/conference'
import { SESSIONS } from '../actions/session'
import { DAY } from '../actions/filter'
import settings from './settings'
import type { Session, Conference } from '../types/SleepingPill'
import type {   PayloadAction } from '../types/Actions'

<<<<<<< e435eb0e7ec2cd1ed21bfe8af798f79c16205ef0
<<<<<<< 0fe177708fc9ced6b78ca557214e91193916c2e4
>>>>>>> Session feedback. WIP
=======
import { FEEDBACK } from '../actions/feedback';
>>>>>>> feedback. WIP
=======
import feedback from './feedback';
>>>>>>> refac

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




const reducers = combineReducers({
  conferences, 
  sessions,
  settings,
  filter,
  feedback,
  tabBar: tabBarReducer,
})

export default reducers