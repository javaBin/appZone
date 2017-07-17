import { postFeedback } from '../components/feedback/FeedbackApi'
// @flow

export const FEEDBACK = {
  ADD: 'FEEDBACK_ADD',
  UPDATE: 'FEEDBACK_UPDATE',
  GET: 'FEEDBACK_GET',
  SUBMIT: 'FEEDBACK_SUBMIT',
  FETCH_POST: 'FEEDBACK_POST_REQUEST',
  FETCH_SUCCESS: 'FEEDBACK_FETCH_SUCCESS',
  FETCH_ERROR: 'FEEDBACK_FETCH_ERROR'
};

export const getFeedback = 
  (sessionId) => ({type: FEEDBACK.GET, payload: sessionId});

export const updateFeedback = 
  (feedback) => ({type: FEEDBACK.UPDATE, payload : feedback})

export const addFeedback =
  (feedback) => {
    console.log('add feedback called', feedback)
    return ({type: FEEDBACK.ADD, payload: feedback});
    //return (dispatch, getState) =>{
      //let state = getState();
      //let hasFeedback = state.feedback.feedbackList.filter((feedback)=> {
      //  return feedback.sessionTitle === score.sessionTitle && feedback.title === score.title;
      //});
      //console.log('has feedback length', state.feedback.feedbackList)
      //console.log('has feedback length', hasFeedback.length)
      //if(hasFeedback.length === 0) {
      //  dispatch({type: FEEDBACK.ADD, payload: score})
      //}
    //}
  };

export const submitFeedback =
  (feedback) => {
    //return (dispatch, getState) => {
    //  postFeedback(feedback);
      return ({ type: FEEDBACK.SUBMIT, payload : feedback});
    //}
  };

//export const postFeedback = 
//  (feedback) => ({type: FEEDBACK.FETCH_POST, feedback: feedback});

export const feedbackFetchSuccess =
  (json) => ( {type: FEEDBACK.FETCH_SUCCESS, response: json} );

export const feedbackFetchError =
  (errorMsg) => ({type: FEEDBACK.FETCH_ERROR, error: errorMsg});

