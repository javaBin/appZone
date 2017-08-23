// @flow

import { call, put, takeLatest } from 'redux-saga/effects'
import { feedback } from './DevNullApi'
import { feedbackFetchError, feedbackFetchSuccess, FEEDBACK } from '../actions/feedback'



function* postFeedbackRequest(action) {
  try {
    const feedbackPost = yield call(() => feedback(action.payload))

    yield put(feedbackFetchSuccess(feedbackPost))
  } catch (e) {
    yield put(feedbackFetchError(e.message))
  }
}

export default function* postFeedbackSaga() {
  yield takeLatest(FEEDBACK.SUBMIT, postFeedbackRequest)
}
