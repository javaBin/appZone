import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'

const initialState = {}

const store = configureStore(initialState)

export default class Main extends Component {
    render() {
        const { App } = this.props;
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}
