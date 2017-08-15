//import DeviceInfo from 'react-native-device-info';

// @flow

import config from '../config'

export const allSession: () => any =
  () =>
    fetch(`${config.urls.sleepingPill}/public/allSessions`)
      .then((res) => res.json())

export const sessionBySlug: (string) => any =
  (slug) => fetch(`${config.urls.sleepingPill}/public/allSessions/${slug}`)
    .then((res) => res.json())

//const options = {
//	"Content-Type": "application/json",
//      headers: {
//        'Content-Type': "application/json",
//		    "Voter-ID": DeviceInfo? "javazone2017" : "javazone2017"
//      }
//}
export const feedback: (feedback) => any =
  (feedback) => {
    options.method = 'POST';

    options.body = JSON.stringify(feedback);
    console.log('call post fetch', feedback)
    return {feedbackId: 12312}
    //return fetch(`https://javazone.no/devnull/server/events/${feedback.eventId}/sessions/${feedback.sessionId}/feedbacks`, config)
    //  .then(res => res.json())
      //.catch(err => {
      //  console.log('err in fetch call', err)
      //  throw err;
      //})
  }