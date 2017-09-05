// @flow

import { call, put, takeLatest } from 'redux-saga/effects'
import { feedback } from './DevNullApi'
import { feedbackFetchError, feedbackFetchSuccess, FEEDBACK } from '../actions/feedback'



function* postFeedbackRequest(action): Generator<*, void, *> {
  try {
    const feedbackPost = yield call(() => feedback(action.payload))

    yield put(feedbackFetchSuccess(feedbackPost))
  } catch (e) {
    yield put(feedbackFetchError(e.message))
  }
}

export default function* postFeedbackSaga(): Generator<*, void, *> {
  yield takeLatest(FEEDBACK.SUBMIT, postFeedbackRequest)
}
