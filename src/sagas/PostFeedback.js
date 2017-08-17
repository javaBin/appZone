// @flow

import { call, put, takeLatest, select } from 'redux-saga/effects';
import { feedback } from './SleepingPillApi';
import { feedbackFetchError, feedbackFetchSuccess, FEEDBACK } from '../actions/feedback';



function* postFeedbackRequest(action) {
  try {
    console.log('post feeback', action)
    const feedbackPost = yield call(() => feedback(action.payload));
    console.log('result from post', feedbackPost)

    yield put(feedbackFetchSuccess(feedbackPost))
  } catch (e) {
    console.log('catch err', e)
    yield put(feedbackFetchError(e.message))
  }
}

export default function* postFeedbackSaga() {
  console.log('Saga post feedback')
  yield takeLatest(FEEDBACK.SUBMIT, postFeedbackRequest);
}
