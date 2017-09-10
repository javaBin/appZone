// @flow

export type Conference = {
  name: string,
  slug: string
}

export type ConferenceApiResponse = {conferences: Array<Conference>}

export type Speaker = {
  name: string,
  bio: string,
  twitter: ?string
}

export type Session = {
  sessionId: string,
  conferenceId: string,
  slug: string,

  title: string,
  abstract: string,
  intendedAudience: string,
  speakers: Array<Speaker>,

  language: 'no' | 'en',
  format: 'presentation' | 'lightning-talk' | 'workshop',
  level: 'beginner' | 'intermediate' | 'advanced',
  keywords: Array<String>,

  startTimeZulu: ?string,
  endTimeZulu: ?string,
  endTime: ?string,
  startTime: ?string,
  room: ?string,

  video: ?string
}

export type SessionsApiResponse = {sessions: Array<Session>}
