// @flow

import { CONFERENCES } from '../actions/conference'

import type { Conference } from '../types/SleepingPill'
import type { ConferenceFetchSuccessAction } from '../actions/conference'

export type ConferencesState = {
  all: Array<Conference>,
  selected: string
}

const conferenceInit: ConferencesState = { all: [], selected: "javazone_2016" }

const conferences = (state: ConferencesState = conferenceInit, action: ConferenceFetchSuccessAction) => {
  switch (action.type) {
    case CONFERENCES.FETCH_SUCCESS:
      return { all: action.payload }
    default:
      return state
  }
}

export default conferences
