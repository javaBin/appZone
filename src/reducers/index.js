// @flow

import { combineReducers } from 'redux';
import { CONFERENCES } from '../actions/conference';
import { SESSIONS } from '../actions/session';
import settings from './settings';
import type { Sessions } from '../types/SleepingPill';

const conferenceInit = {all: [], selected: "javazone_2016"};
const conferences = (state = conferenceInit, action) => {
  switch (action.type) {
    case CONFERENCES.FETCH_SUCCESS:
      return {all: action.conferences};
    default:
      return state
  }
};

const sessions = (state: Sessions = [], action) => {
  switch (action.type) {
    case SESSIONS.FETCH_SUCCESS:
      return action.sessions;
    default:
      return state
  }
};

const reducers = combineReducers({conferences, sessions, settings});

export default reducers
