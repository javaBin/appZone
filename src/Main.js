import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'

const initialState = {}

const store = configureStore(initialState)

const Main = ({ App }) => (
    <Provider store={store}>
        <App />
    </Provider>
)

export default Main