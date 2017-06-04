import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'
import App from './containers/App'
import { fetchConferences } from './actions/conference';
import { fetchSessions } from './actions/session';


const initialState = {}

const store = configureStore(initialState)

store.dispatch(fetchConferences())
store.dispatch(fetchSessions('javazone_2016'));

const Main = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

export default Main