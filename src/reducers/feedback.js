// @flow

import { FEEDBACK } from '../actions/feedback'


export type FeedbackState = {
  feedbackSessionIds:any,
  feedback:any
}
const feedbackInit = ():FeedbackState => ({ feedbackSessionIds: [], feedback :[] })

const feedback = (state: FeedbackState = feedbackInit(), action) => {
  switch (action.type) {
      case FEEDBACK.ADD:
        return insertItem(state, action)
      case FEEDBACK.UPDATE:
        return updateItem(state, action)
      case FEEDBACK.FETCH_SUCCESS:
        return { ...state, message: action.response }
      case FEEDBACK.FETCH_ERROR: 
        return { ...state, message: { error: action.error } }
      case FEEDBACK.REMOVE_ERROR:
        return { ...state, message: null }
      default:
        return { ...state }
    }
}



function insertItem(array, action) {
    let itemExist = array.feedback.filter(a => a.sessionId === action.payload.sessionID)
    if(itemExist > 0) {
      return array
    } else {
      return { feedback: [...array.feedback, action.payload], feedbackSessionIds: [...array.feedbackSessionIds, action.payload.sessionId] }
    }
}


function updateItem(array, action) {
  return { feedbackSessionIds: array.feedbackSessionIds, feedback: array.feedback.map((item) => {
    if(item.sessionId !== action.payload.sessionId) {
      return item
    }
    return Object.assign({}, { ...item, feedback: { ...item.feedback, ...action.payload.feedback } }) 
  } ) }
}

export default feedback