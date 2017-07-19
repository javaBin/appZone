// @flow

import type { PayloadAction, ErrorAction, TypedAction } from '../types/Actions'
import type { Conference, ConferenceApiResponse } from '../types/SleepingPill'

export const CONFERENCES = {
  FETCH_SUCCESS: 'conference:fetchSuccess',
  FETCH_ERROR: 'conference:fetchError',
  FETCH_REQUEST: 'conference:fetchRequest'
}

export type ConferenceFetchSuccessAction = PayloadAction<'conference:fetchSuccess', Array<Conference>>
export const conferenceFetchSuccess =
  (json: ConferenceApiResponse): ConferenceFetchSuccessAction =>
    ({ type: CONFERENCES.FETCH_SUCCESS, payload: json.conferences })

export type ConferenceFetchErrorAction = ErrorAction<'conference:fetchError'>
export const conferenceFetchError =
  (errorMsg: string): ConferenceFetchErrorAction => ({ type: CONFERENCES.FETCH_ERROR, errorMsg })

export type FetchConferencesAction = TypedAction<'conference:fetchRequest'>
export const fetchConferences =
  (): FetchConferencesAction => ({ type: CONFERENCES.FETCH_REQUEST })
