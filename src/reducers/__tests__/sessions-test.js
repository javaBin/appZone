// @flow

import reducer, { findSlotNumber } from '../sessions'
import { sessionsFetchSuccess } from '../../actions/session'

import type { Session, SessionsApiResponse } from '../../types/SleepingPill'

describe("session reducer", () => {
  it("should find slot 1 for 45 min presentation", () => {
    const startDateTime = "2016-09-08T07:00Z"
    const endDateTime = "2016-09-08T07:45Z"

    const slotNum = findSlotNumber(startDateTime, endDateTime)

    expect(slotNum).toBe(1)
  })

  it("should find slot 1 for 60 min presentation", () => {
    const startDateTime = "2016-09-08T07:00Z"
    const endDateTime = "2016-09-08T08:00Z"

    const slotNum = findSlotNumber(startDateTime, endDateTime)

    expect(slotNum).toBe(1)
  })

  it("should find slot 1 for 10 min lightningtalk", () => {
    const startDateTime = "2016-09-08T11:15Z"
    const endDateTime = "2016-09-08T11:25Z"

    const slotNum = findSlotNumber(startDateTime, endDateTime)

    expect(slotNum).toBe(4)
  })

  it("should default to slot 0 when no datetime provided", () => {
    const slotNum = findSlotNumber(null, null)

    expect(slotNum).toBe(0)
  })

  it("should reduce to timeslots", () => {
    const state = reducer({ all: [] }, sessionsFetchSuccess(fixture))

    expect(state).toEqual({
      all: fixture.sessions,
      slots:
        [{
          day: "2016-09-08",
          slots: {
            "1": [session1],
            "7": [session2]
          }
        }]
      }
    )
  })
})

const session1:Session =  {
  conferenceId: "3baa25d3-9cca-459a-90d7-9fc349209289",
  sessionId: "9a5a84def65d4c3880e0154c0adf50e5",
  slug: "slug1",

  title: "title 1",
  abstract: "",
  intendedAudience: "",
  speakers: [],

  language:  "en",
  format: 'presentation',
  level: 'beginner',
  keywords: [],

  startTimeZulu: "2016-09-08T07:00Z",
  endTimeZulu: "2016-09-08T08:00Z",
  room: "Room 5",

  video: null
}

const session2: Session =     {
  conferenceId: "3baa25d3-9cca-459a-90d7-9fc349209289",
  sessionId: "9cd53aacae26476ca86bacc9fa76457d",
  slug: "slug2",

  title: "title 2",
  abstract: "",
  intendedAudience: "",
  speakers: [],

  language:  "en",
  format: 'presentation',
  level: 'beginner',
  keywords: [],

  startTimeZulu: "2016-09-08T15:00Z",
  endTimeZulu: "2016-09-08T16:00Z",
  room: "Room 4",

  video: null
}
const fixture: SessionsApiResponse = {
  sessions: [ session1, session2 ]
}
