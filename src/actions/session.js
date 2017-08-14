// @flow

import type { PayloadAction, ErrorAction } from '../types/Actions'
import type { Session, SessionsApiResponse } from '../types/SleepingPill'

export const SESSIONS = {
  FETCH_SUCCESS: 'sessions:fetchSuccess',
  FETCH_ERROR: 'sessions:fetchError',
  FETCH_REQUEST: 'sessions:fetchRequest'
}

export type SessionsFetchSuccessAction = PayloadAction<'sessions:fetchSuccess', Array<Session>>
export const sessionsFetchSuccess =
  (json: SessionsApiResponse): SessionsFetchSuccessAction =>
    ( { type: SESSIONS.FETCH_SUCCESS, payload: json.sessions } )

export type SessionsFetchErrorAction = ErrorAction<'sessions:fetchError'>
export const sessionsFetchError =
  (errorMsg: string): SessionsFetchErrorAction => ({ type: SESSIONS.FETCH_ERROR, errorMsg })

export type FetchSessionsAction = PayloadAction<'sessions:fetchRequest', string>
export const fetchSessions =
  (slug: string): FetchSessionsAction => ({ type: SESSIONS.FETCH_REQUEST, payload: slug })
