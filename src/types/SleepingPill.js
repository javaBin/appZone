// @flow

export type Conference = {
  name: string,
  slug: string
}

export type Conferences = Array<Conference>

export type Speaker = {
  name: string,
  bio: string,
  twitter: string
}

export type Session = {
  sessionId: string,
  title: string,
  abstract: string,
  intendedAudience: string,
  language: 'no' | 'en',
  format: 'presentation' | 'lightning-talk' | 'workshop',
  level: 'beginner' | 'intermediate' | 'advanced',
  keywords: Array<String>,
  speakers: Array<Speaker>
}

export type Sessions = Array<Session>
