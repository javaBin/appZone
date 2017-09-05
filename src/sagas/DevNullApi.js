import config from '../config'

export const feedback: (feedback) => any =
  (feedback) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
        "Voter-ID": feedback.uuid 
      },
      body: JSON.stringify(feedback.feedback)
    }
    return fetch(`${config.urls.devnull}/events/${feedback.eventId}/sessions/${feedback.sessionId}/feedbacks`, options)
      .then(res => {
        if (res.status === 202) {
          return { message: 'Feedback submitted' }
        } else if(res.status === 403) {
          return { message : 'Please try again. Feedback opens 10 min before session ends.' }  
        } else {
          return res.status  
        }
      }
      )
  } 