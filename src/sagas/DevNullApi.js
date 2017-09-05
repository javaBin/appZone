import config from '../config'

export const feedback: (feedback) => any =
  (feedback) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
        "Voter-ID": feedback.uuid ? feedback.uuid : "javazone2017"
      },
      body: JSON.stringify(feedback.feedback)
    }
    return fetch(`${config.urls.devnull}/events/${feedback.eventId}/sessions/${feedback.sessionId}/feedbacks`, options)
      .then(res => res.json())
  }