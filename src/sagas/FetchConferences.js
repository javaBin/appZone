// @flow

import { call, put, takeLatest } from 'redux-saga/effects';
import { allSession } from './SleepingPillApi';
import { conferenceFetchError, conferenceFetchSuccess, CONFERENCES } from '../actions/conference';

function* fetchConferencesRequest() {
  try {
    const confs = yield call(allSession);
    yield put(conferenceFetchSuccess(confs))
  } catch (e) {
    yield put(conferenceFetchError(e.message))
  }
}

export default function* fetchConferences() {
  yield takeLatest(CONFERENCES.FETCH_REQUEST, fetchConferencesRequest);
}
