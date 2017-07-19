// @flow

import type { Day, Days } from '../types/filter'

export const DAY = {
  SET_DAYS: 'SET_DAYS',
  SET_SELECTED_DAY: 'SET_SELECTED_DAY',
}

export const setDays = 
  (days: Days) => ({ type: DAY.SET_DAYS, days: days })

export const setSelectedDay =
  (day: Day) => ({ type: DAY.SET_SELECTED_DAY, day: day })