// @flow

import type { PayloadAction, ErrorAction, Action } from '../types/Actions'
import type { Conference, ConferenceApiResponse } from '../types/SleepingPill'

export const CONFERENCES = {
  FETCH_SUCCESS: 'CONFERENCES_FETCH_SUCCESS',
  FETCH_ERROR: 'CONFERENCES_FETCH_ERROR',
  FETCH_REQUEST: 'CONFERENCES_FETCH_REQUEST'
}

export const conferenceFetchSuccess =
  (json: ConferenceApiResponse): PayloadAction<Array<Conference>> =>
    ({ type: CONFERENCES.FETCH_SUCCESS, payload: json.conferences })

export const conferenceFetchError =
  (errorMsg: string): ErrorAction => ({ type: CONFERENCES.FETCH_ERROR, errorMsg })

export const fetchConferences =
  (): Action => ({ type: CONFERENCES.FETCH_REQUEST })
