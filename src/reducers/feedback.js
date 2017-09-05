// @flow

import { FEEDBACK } from '../actions/feedback'
import type { 
  AddFeedbackAction, 
  UpdateFeedbackAction, 
  FeedbackSubmitAction, 
  FeedbackFetchSuccessAction, 
  FeedbackFetchErrorAction, 
  ReomoveErrorAction } from '../actions/feedback'

export type FeedbackState = {
  feedback:any,
  feedbackCriteria:any
}
const feedbackCriteria = [
    { id: 'Overall', title: 'Session rating', low: 'Not so awesome', high: 'Awsome' }, 
    { id: 'Relevance', title: 'How relevant was this session to your projects', low: 'Not at all', high: 'Extremly' }, 
    { id: 'Content', title: 'Based on the decription/my expectaions, the content was', low: 'Too basic', high: 'Too advanced' },
    { id: 'Quality', title: 'Speaker quality', low: 'Poor', high: 'Outstanding' }, 
    { id: 'Comments', title: 'Any other comments' }
]
const feedbackInit = ():FeedbackState => ({ feedback :[], feedbackCriteria: feedbackCriteria })

export type FeedbackActions = AddFeedbackAction | 
UpdateFeedbackAction | 
FeedbackSubmitAction | 
FeedbackFetchSuccessAction | 
FeedbackFetchErrorAction | 
ReomoveErrorAction

const feedback = (state: FeedbackState = feedbackInit(), action: FeedbackActions) => {
  switch (action.type) {
      case FEEDBACK.ADD:
        return insertItem(state, action)
      case FEEDBACK.UPDATE:
        return updateItem(state, action)
      case FEEDBACK.FETCH_SUCCESS:
        return { ...state, message: action.payload }
      case FEEDBACK.FETCH_ERROR: 
        return { ...state, message: { error: action.errorMsg } }
      case FEEDBACK.REMOVE_ERROR:
        return { ...state, message: null }
      default:
        return { ...state }
    }
}



function insertItem(state, action) {
    let itemExist = state.feedback.filter(a => a.sessionId === action.payload.sessionID)
    if(itemExist > 0) {
      return state
    } else {
      return { feedbackCriteria: [...state.feedbackCriteria], feedback: [...state.feedback, action.payload] }
    }
}


function updateItem(state, action) {
  return { feedbackCriteria: [...state.feedbackCriteria], feedback: state.feedback.map((item) => {
    if(item.sessionId !== action.payload.sessionId) {
      return item
    }
    return Object.assign({}, { ...item, feedback: { ...item.feedback, ...action.payload.feedback } }) 
  } ) }
}

export default feedback