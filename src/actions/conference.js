// @flow
export const CONFERENCES = {
  FETCH_SUCCESS: 'CONFERENCES_FETCH_SUCCESS',
  FETCH_ERROR: 'CONFERENCES_FETCH_ERROR',
  FETCH_REQUEST: 'CONFERENCES_FETCH_REQUEST'
}

export const conferenceFetchSuccess =
  (json) => ( { type: CONFERENCES.FETCH_SUCCESS, conferences: json.conferences } )

export const conferenceFetchError =
  (errorMsg) => ({ type: CONFERENCES.FETCH_ERROR, errorMsg })

export const fetchConferences =
  () => ({ type: CONFERENCES.FETCH_REQUEST })
