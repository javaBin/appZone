// @flow

import { SESSIONS } from '../actions/session'
import moment from 'moment'
import groupBy from 'lodash/groupBy'

import type { Session } from '../types/SleepingPill'
import type { SessionsFetchSuccessAction } from '../actions/session'

export type TimeSlot = {
  [string]: {
    [string]: Array<Session>
  }
}

export type SessionState = {
  all: Array<Session>,
  slotsBySlots?: TimeSlot
}

const initState: SessionState = {
  all: []
}

const sessions = (state: SessionState = initState, action: SessionsFetchSuccessAction) => {
  switch (action.type) {
    case SESSIONS.FETCH_SUCCESS: {
      const byDay = groupBy(
        action.payload,
        (s: Session) => moment(s.startTimeZulu).utc().format("YYYY-MM-DD"))

      const slots  = Object
        .keys(byDay).map(day => ({
          day: day,
          slots: groupBy(byDay[day], findSlotFromSession)
        }))
      return { ...state, all: action.payload, slots }
    }
    default:
      return state
  }
}

const findSlotFromSession = (session: Session): number =>
  findSlotNumber(session.startTimeZulu, session.endTimeZulu)

export const findSlotNumber = (startDateTime: ?string, endDateTime: ?string): number => {
  const toNowTime = (str) => moment(moment(str).utc().format("HH:mmZ"), "HH:mmZ").utc()
  const startTime = toNowTime(startDateTime)
  const endTime = toNowTime(endDateTime)
  const slot = slotsZulu.find(
    slot => (startTime.isSameOrAfter(slot.start) && endTime.isSameOrBefore(slot.end)))
  return slot ? slot.num : 0
}

export const slotsZulu = [
  { num: 1, start: "07:00Z", end: "08:00Z" },
  { num: 2, start: "08:20Z", end: "09:20Z" },
  { num: 3, start: "09:40Z", end: "10:40Z" },
  { num: 4, start: "11:00Z", end: "12:00Z" },
  { num: 5, start: "12:20Z", end: "13:20Z" },
  { num: 6, start: "13:40Z", end: "14:40Z" },
  { num: 7, start: "15:00Z", end: "16:00Z" },
  { num: 8, start: "16:20Z", end: "17:20Z" }
].map(s => ({
  num: s.num,
  start: moment(s.start, 'HH:mmZ').utc(),
  end: moment(s.end, 'HH:mmZ').utc()
}))

export default sessions