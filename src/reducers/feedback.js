// @flow

import { FEEDBACK } from '../actions/feedback';


export type FeedbackState = {
  feedbackSessionIds:any,
  feedback:any
}
const feedbackInit = ():FeedbackState => ({feedbackSessionIds: [], feedback :[]});

const feedback = (state: FeedbackState = feedbackInit(), action) => {
  switch (action.type) {
      case FEEDBACK.GET: 
        return {...state, feedback}
      case FEEDBACK.ADD:
        return insertItem(state, action)
      case FEEDBACK.UPDATE:
        console.log('add reducer', action);
        const item = updateItem(state, action);
        console.log('utpdate item', item);
        return item;
      case FEEDBACK.FETCH_SUCCESS:
        console.log('posted feedback', action);
        console.log('posted feedback', state);
        return {...state, message: action.response}
      case FEEDBACK.FETCH_ERROR: 
        return {...state, message: action.error}
      case FEEDBACK.REMOVE_ERROR:
        return {...state, message: null}

      default:
        return {...state}
    }
}


function arrayObjectIndexOf(myArray, searchTerms, properties) {
    for(var i = 0, len = myArray.length; i < len; i++) {
        if (myArray[i][properties[0]] === searchTerms[0] && myArray[i][properties[1]] === searchTerms[1]) return i;
    }
    return -1;
}

function insertItem(array, action) {
    let itemExist = array.feedback.filter(a => a.sessionId === action.payload.sessionID);
    if(itemExist > 0) {
      return array;
    } else {
      return {feedback: [...array.feedback, action.payload], feedbackSessionIds: [...array.feedbackSessionIds, action.payload.sessionId]};
    }
    //let newArray = array.slice();
    //newArray.splice(action.index, 0, action.item);
    //return newArray;
}

function removeItem(array, action) {
    return array.filter( (item, index) => index !== action.index);
}

function updateItem(array, action) {
  console.log('update item method')
  return {feedbackSessionIds: array.feedbackSessionIds, feedback: array.feedback.map((item) => {
    console.log(`item ${item} action ${action.payload.sessionId}`);
    console.log(`item`, item);
    if(item.sessionId !== action.payload.sessionId) {
      console.log('if session is same', item)
      return item;
    }
    const t = {...item, ...action.payload};
    console.log('changed item', t);
    return t; 
            
  })}
}

const errors = (state = [], action) => {
  switch (action.type) {
     case FEEDBACK.ADD_ERROR:
      console.log('add error', action)
      return state.concat([{error: action.error, index: state.length}]);

      return state.filter((error, i) => i.index !== action.error.index);
    default:
      return state;
  }
}
 
export default feedback;