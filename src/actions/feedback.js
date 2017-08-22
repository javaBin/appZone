export const FEEDBACK = {
  ADD: 'FEEDBACK_ADD',
  UPDATE: 'FEEDBACK_UPDATE',
  SUBMIT: 'FEEDBACK_SUBMITT',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR',
  REMOVE_ERROR: 'REMOVE_ERROR'
}

export const updateFeedback = 
  (feedback) => ({ type: FEEDBACK.UPDATE, payload : feedback })

export const addFeedback =
  (feedback) => {
    return ({ type: FEEDBACK.ADD, payload: feedback })}

export const submitFeedback =
  (feedback) => {
      return ({ type: FEEDBACK.SUBMIT, payload : feedback })}
export const feedbackFetchSuccess =
  (json) => {
    return { type: FEEDBACK.FETCH_SUCCESS, response: json }}

export const feedbackFetchError =
  (errorMsg) => ({ type: FEEDBACK.FETCH_ERROR, error: errorMsg })

export const removeError = (error) => ({ type: FEEDBACK.REMOVE_ERROR, error })
  