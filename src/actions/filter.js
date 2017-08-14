// @flow

import type { PayloadAction } from '../types/Actions'
import type { Day, Days } from '../types/filter'

export const DAY = {
  SET_DAYS: 'filter:setDays',
  SET_SELECTED_DAY: 'filter:setSelectedDay',
}

export type SetDaysAction = PayloadAction<'filter:setDays', Days>
export const setDays = 
  (days: Days) => ({ type: DAY.SET_DAYS, payload: days })


export type SetSelectedDayAction = PayloadAction<'filter:setSelectedDay', Day>
export const setSelectedDay =
  (day: Day) => ({ type: DAY.SET_SELECTED_DAY, payload: day })