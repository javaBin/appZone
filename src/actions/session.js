// @flow

import type { PayloadAction, ErrorAction } from '../types/Actions'
import type { Session, SessionsApiResponse } from '../types/SleepingPill'

export const SESSIONS = {
  FETCH_SUCCESS: 'SESSIONS_FETCH_SUCCESS',
  FETCH_ERROR: 'SESSIONS_FETCH_ERROR',
  FETCH_REQUEST: 'SESSIONS_FETCH_REQUEST'
}

export const sessionsFetchSuccess =
  (json: SessionsApiResponse): PayloadAction<Array<Session>> =>
    ( { type: SESSIONS.FETCH_SUCCESS, payload: json.sessions } )

export const sessionsFetchError =
  (errorMsg: string): ErrorAction => ({ type: SESSIONS.FETCH_ERROR, errorMsg })

export const fetchSessions =
  (slug: string): PayloadAction<string> => ({ type: SESSIONS.FETCH_REQUEST, payload: slug })
