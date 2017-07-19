// @flow

import { DAY } from '../actions/filter'

import type { Action } from '../types/Actions'

const daysInit = {
  days: { day1: null, day2: null },
  selectedDay: null,
}

export type FilterState = {
  selectedDay: ?string,
  days: {
    day1: ?string,
    day2: ?string
  }
}
export type FilterAction = Action & {
  day?: string,
  days: {
    day1: ?string,
    day2: ?string
  }
}

const filter = (state: FilterState = daysInit, action: FilterAction) => {
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

export default filter
