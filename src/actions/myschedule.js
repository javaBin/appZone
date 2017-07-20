export const MYSCHEDULE = {
  SET_MY_SCHEDULE: 'SET_MY_SCHEDULE',
  ADD_MY_SCHEDULE: 'ADD_MY_SCHEDULE',
  REMOVE_MY_SCHEDULE: 'REMOVE_MY_SCHEDULE',
  GET_MY_SCHEDULE_CONFIG: 'GET_MY_SCHEDULE_CONFIG'
}

export function addToMySchedule(sessionId) {
  console.warn(sessionId);
  return {
    type: MYSCHEDULE.ADD_MY_SCHEDULE,
    payload: sessionId
  }
}

export function loadMySchedule(myScheduleLoaded) {
  return {
    type: MYSCHEDULE.GET_MY_SCHEDULE_CONFIG,
    payload: myScheduleLoaded
  }
}