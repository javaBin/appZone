export const FEEDBACK = {
  ADD: 'feedback:addFeedback',
  UPDATE: 'feedback:updateFeedback',
  SUBMIT: 'feedback:submitFeedback',
  FETCH_SUCCESS: 'feedback:postSuccess',
  FETCH_ERROR: 'feedback:postError',
  REMOVE_ERROR: 'feedback:removeMessag'
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
  