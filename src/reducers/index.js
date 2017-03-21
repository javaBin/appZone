import { combineReducers } from 'redux'

// temporary reducer, remove once an actual exist
const temp = (state = false, action) => state;

const reducers = combineReducers({
    temp
})

export default reducers
