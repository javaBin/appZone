'use strict'

import request from '../lib/request';

let sessionFeedBackWebUriTest = "http://test.javazone.no/devnull/server";
let sessionFeedbackWebUriRelease = "http://javazone.no/devnull/server";

let config = {
	"url": sessionFeedBackWebUriTest,
	"Content-Type": "application/json"
}

function outputSuccess(body) {
	console.log(body);
}


export function postFeedbackTest(data) {
	return request(sessionFeedBackWebUriTest, config)
		.post(data)
		.then(body => { dispatch(outputSuccess(body)); })
		.catch(err => {
			console.warn('Feedback failed', err);
			//dispatch failed
		});
}
