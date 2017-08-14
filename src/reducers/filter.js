// @flow

import { DAY } from '../actions/filter'

import type { SetDaysAction, SetSelectedDayAction } from '../actions/filter'
import type { Day, Days } from '../types/filter'

const daysInit = {
  days: { day1: null, day2: null },
  selectedDay: null,
}

export type FilterState = {
  selectedDay: ?Day,
  days: Days
}
export type FilterAction = SetDaysAction | SetSelectedDayAction

const filter = (state: FilterState = daysInit, action: FilterAction) => {
  switch (action.type) {
    case DAY.SET_DAYS:
      return {
        ...state,
        days: action.payload
      }
    case DAY.SET_SELECTED_DAY:
      return  {
        ...state,
        selectedDay: action.payload
      }
    default:
      return state
  }
}

export default filter
