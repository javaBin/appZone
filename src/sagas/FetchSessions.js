// @flow

import { call, put, takeLatest, select } from 'redux-saga/effects'
import { sessionBySlug } from './SleepingPillApi'
import { sessionsFetchError, sessionsFetchSuccess, SESSIONS } from '../actions/session'

function* fetchSessionsRequest() {
  try {
    const selectedConf = yield select((state) => (state.conferences.selected))
    const sessions = yield call(() => sessionBySlug(selectedConf))
    yield put(sessionsFetchSuccess(sessions))
  } catch (e) {
    yield put(sessionsFetchError(e.message))
  }
}

export default function* fetchSessions() {
  yield takeLatest(SESSIONS.FETCH_REQUEST, fetchSessionsRequest)
}
