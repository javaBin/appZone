import DeviceInfo from 'react-native-device-info'
import config from '../config'

const options = {
	"Content-Type": "application/json",
    headers: {
      'Content-Type': "application/json",
      "Voter-ID": DeviceInfo ? "javazone2017" : "javazone2017"
    }
}

export const feedback: (feedback) => any =
  (feedback) => {
    options.method = 'POST'
    options.body = JSON.stringify(feedback.feedback)
    return fetch(`${config.urls.devnull}/events/${feedback.eventId}/sessions/${feedback.sessionId}/feedbacks`, options)
      .then(res => res.json())
  }