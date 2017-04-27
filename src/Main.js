import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'
import App from './containers/App';
import { fetchConferences } from './actions/conference';

const initialState = {}

const store = configureStore(initialState)

store.dispatch(fetchConferences())

const Main = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

export default Main