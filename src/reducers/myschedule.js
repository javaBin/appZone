'use strict'

import { AsyncStorage } from 'react-native'
import { MYSCHEDULE } from '../actions/myschedule'

const STORE_MY_SCHEDULE_KEY = 'SETTINGSKEY'

export type Settings = {
  myschedule: string[],
}

const initialState: MySchedule = {
  myschedule: [],
}

export default function myschedule(state = initialState, action) {
  // console.warn(state.myschedule, 'myschedule')
  let newSchedule = state.myschedule.slice(0);
//  console.warn(JSON.stringify(newSchedule))
  switch (action.type) {
    case MYSCHEDULE.ADD_MY_SCHEDULE: 
      storeMySchedule(action.type, action.payload)
      newSchedule.push( action.payload )
      return { ...state, myschedule: newSchedule } 
    break
    case MYSCHEDULE.REMOVE_MY_SCHEDULE: 
      storeMySchedule(action.type, action.payload)
      return { ...state, myschedule: newSchedule.splice((newSchedule.indexOf(action.payload)), 1) }
  }
  return state
}

function storeMySchedule(type, sessionId) {
  let sessions = [];
  AsyncStorage.getItem(STORE_MY_SCHEDULE_KEY).then((sessionIdList) => {
    sessions = JSON.parse(sessionIdList)

    if (sessions != null) {
      switch (type){
        case MYSCHEDULE.ADD_MY_SCHEDULE:
          sessions.push(JSON.stringify(sessionId));
        break
        case MYSCHEDULE.REMOVE_MY_SCHEDULE: 
          sessions.splice(sessions.indexOf(sessionId), 1)
      default:
        break
    }
      AsyncStorage.setItem(STORE_MY_SCHEDULE_KEY, JSON.stringify(sessions), () => { })
    }
  })
}
module.exports = myschedule