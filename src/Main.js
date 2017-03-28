import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'
import App from './containers/App'

const initialState = {}

const store = configureStore(initialState)

const Main = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

export default Main