// @flow
export const SESSIONS = {
  FETCH_SUCCESS: 'SESSIONS_FETCH_SUCCESS',
  FETCH_ERROR: 'SESSIONS_FETCH_ERROR',
  FETCH_REQUEST: 'SESSIONS_FETCH_REQUEST'
};

export const sessionsFetchSuccess =
  (json) => ({ type: SESSIONS.FETCH_SUCCESS, sessions: json.sessions });

export const sessionsFetchError =
  (errorMsg) => ({ type: SESSIONS.FETCH_ERROR, errorMsg });

export const fetchSessions =
  (slug) => ({ type: SESSIONS.FETCH_REQUEST, conferenceSlug: slug });
