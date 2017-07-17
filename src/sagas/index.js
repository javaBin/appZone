import { fork } from 'redux-saga/effects'
import fetchConferences from './FetchConferences'
import fetchSessions from './FetchSessions'
import postFeedback from './PostFeedback'

export default function* root() {
  yield [
    fork(postFeedback),
    fork(fetchSessions),
    fork(fetchConferences)
  ]
}
