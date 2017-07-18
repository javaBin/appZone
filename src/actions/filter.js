export const DAY = {
  SET_DAYS: 'SET_DAYS',
  SET_SELECTED_DAY: 'SET_SELECTED_DAY',
}

export const setDays = 
  (days) => ({ type: DAY.SET_DAYS, days: days })

export const setSelectedDay =
  (day) => ({ type: DAY.SET_SELECTED_DAY, day: day })