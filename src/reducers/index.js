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

<<<<<<< 0fe177708fc9ced6b78ca557214e91193916c2e4
>>>>>>> Session feedback. WIP
=======
import { FEEDBACK } from '../actions/feedback';
>>>>>>> feedback. WIP

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

function arrayObjectIndexOf(myArray, searchTerms, properties) {
    for(var i = 0, len = myArray.length; i < len; i++) {
        if (myArray[i][properties[0]] === searchTerms[0] && myArray[i][properties[1]] === searchTerms[1]) return i;
    }
    return -1;
}

function insertItem(array, action) {
    let itemExist = array.filter(a => a.sessionId === action.payload.sessionID);
    if(itemExist > 0) {
      return array;
    } else {
      return [...array, action.payload];
    }
    //let newArray = array.slice();
    //newArray.splice(action.index, 0, action.item);
    //return newArray;
}

function removeItem(array, action) {
    return array.filter( (item, index) => index !== action.index);
}

function updateItem(array, action) {
  console.log('update item method')
  return array.map((item) => {
    console.log(`item ${item} action ${action.payload.sessionId}`);
    console.log(`item`, item);
    if(item.sessionId !== action.payload.sessionId) {
      console.log('if session is same', item)
      return item;
    }
    const t = {...item, ...action.payload};
    console.log('changed item', t);
    return t; 
            
  })
}


const feedbackInit = []

const feedback = (state = feedbackInit, action) => {
  switch (action.type) {
    case FEEDBACK.GET: 
      return {...state, feedback}
    case FEEDBACK.ADD:
      return insertItem(state, action)
    case FEEDBACK.UPDATE:
      console.log('add reducer', action);
      //let i = arrayObjectIndexOf(state, [action.payload.sessionTitle, action.payload.title], ['sessionTitle', 'title']);
      const item = updateItem(state, action);
      console.log('utpdate item', item);
      return item;
      //return [
      //  ...state.slice(0, i),
      //  {[action.payload.session.sessionId] : action.payload},
      //  ...state.slice(i+1)];
    case FEEDBACK.SUBMIT:
      return {...state}
    case FEEDBACK.FETCH_SUCCESS:
      console.log('posted feedback', action);
      console.log('posted feedback', state);
      return {...state}
    case FEEDBACK.FETCH_ERROR:
        return action.error;
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