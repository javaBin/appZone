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
          return { message : 'Please submit feedback towards the end of the session' }  
        } else {
          return { message: 'Ops somthing went wrong.' }
        }
      }
      )
  } 