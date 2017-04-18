import { fork } from 'redux-saga/effects';
import fetchConferences from './FetchConferences'
import fetchSessions from './FetchSessions'

export default function* root() {
  yield [
    fork(fetchSessions),
    fork(fetchConferences)
  ];
}
