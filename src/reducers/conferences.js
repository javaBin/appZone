// @flow

import { CONFERENCES } from '../actions/conference'

import type { Conference } from '../types/SleepingPill'
import type { PayloadAction } from '../types/Actions'

export type State = {
  all: Array<Conference>,
  selected: string
}

const conferenceInit = { all: [], selected: "javazone_2016" }

const conferences = (state: State = conferenceInit, action: PayloadAction<Array<Conference>>) => {
  switch (action.type) {
    case CONFERENCES.FETCH_SUCCESS:
      return { all: action.payload }
    default:
      return state
  }
}

export default conferences
