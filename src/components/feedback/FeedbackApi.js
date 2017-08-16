/* 'use strict'

import request from '../../lib/request';
import DeviceInfo from 'react-native-device-info';
import {FEEDBACK} from '../../actions/feedback';

let sessionFeedBackWebUriTest = "https://test.javazone.no/devnull/server/events/58b3bfaa-4981-11e5-a151-feff819cdc9f/sessions/58b3c298-4981-11e5-a151-feff819cdc9f/feedbacks";
let sessionFeedbackWebUriRelease = "https://javazone.no/devnull/server";

let config = {
	"Content-Type": "application/json",
      headers: {
        'Content-Type': "application/json",
		    "Voter-ID": DeviceInfo? "javazone2017" : "javazone2017"
      }
}

function outputSuccess(body) {
	console.log("What not?", body);
  return {
    type: FEEDBACK.FETCH_SUCCESS,
    body
  }
}

export function postFeedbackTest(data) {
	config.method = "POST";
	config.body = JSON.stringify(data);
	fetch(sessionFeedBackWebUriTest, config)
      .then(response => {
        if (!response.ok) {
          console.warn("not ok", response);
          return Promise.reject({
            statusCode: response.status,
            body: response.json()
          });
        }

        console.warn(response);
        return response.json();
      })
      .catch(err => {
        if (err.statusCode) {
          console.log("error");
          return Promise.reject(err);
        }

        console.warn(err);
        return Promise.reject(err);

      });

}

function url({eventId, sessionId}) {
  return `${sessionFeedbackWebUriRelease}/events/${eventId}/sessions/${sessionId}/feedbacks`;
}

export function postFeedback(data) {
	return request({eventId: data.eventId, sessionId: data.sessionId}, config)
		.post(data)
		.then(body => { dispatch(outputSuccess(body)); })
		.catch(err => {
			console.warn('Feedback failed', err);
			//dispatch failed
		});
}
 */