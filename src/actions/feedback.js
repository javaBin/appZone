// @flow
import type { PayloadAction, ErrorAction } from '../types/Actions'
import type { FeedbackResponse, Feedback } from '../types/feedback'

export const FEEDBACK = {
  ADD: 'feedback:addFeedback',
  UPDATE: 'feedback:updateFeedback',
  SUBMIT: 'feedback:submitFeedback',
  FETCH_SUCCESS: 'feedback:postSuccess',
  FETCH_ERROR: 'feedback:postError',
  REMOVE_ERROR: 'feedback:removeMessage',
  MESSAGE_TO_USER: 'feedback:messageToUser'
}
export type UpdateFeedbackAction = PayloadAction<'feedback:updateFeedback', Feedback>
export const updateFeedback = 
  (feedback: Feedback) => ({ type: FEEDBACK.UPDATE, payload : feedback })

export type AddFeedbackAction = PayloadAction<'feedback:addFeedback', Feedback>  
export const addFeedback =
  (feedback: Feedback): AddFeedbackAction => {
    return ({ type: FEEDBACK.ADD, payload: feedback })}

export type FeedbackSubmitAction = PayloadAction<'feedback:submitFeedback', Feedback>    
export const submitFeedback =
  (feedback: Feedback): FeedbackSubmitAction => {
    return ({ type: FEEDBACK.SUBMIT, payload : feedback })}

export type FeedbackMessageToUserAction = PayloadAction<'feedback:messageToUser', string>
export const feedbackMessageToUser = 
  (message: string): FeedbackMessageToUserAction => {
  return ({ type: FEEDBACK.MESSAGE_TO_USER, payload: message })}

export type FeedbackFetchSuccessAction = PayloadAction<'feedback:postSuccess', FeedbackResponse>
export const feedbackFetchSuccess =
  (json:FeedbackResponse): FeedbackFetchSuccessAction => {
    return { type: FEEDBACK.FETCH_SUCCESS, payload: json }}

export type FeedbackFetchErrorAction = ErrorAction<'feedback:postError', >    
export const feedbackFetchError =
  (errorMsg:string): FeedbackFetchErrorAction => ({ type: FEEDBACK.FETCH_ERROR, errorMsg })

export type ReomoveErrorAction = PayloadAction<'feedback:removeMessage', any>
export const removeError = (error:any):ReomoveErrorAction => ({ type: FEEDBACK.REMOVE_ERROR, payload: error })
