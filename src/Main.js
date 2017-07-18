import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'
import App from './containers/App'
import { fetchConferences } from './actions/conference'
import { fetchSessions } from './actions/session'
import { setDays, setSelectedDay } from './actions/filter'
import { getDays, getSelectedDayBySlug } from './util'


const initialState = {}
const slug = 'javazone_2016'
const store = configureStore(initialState)

store.dispatch(fetchConferences())
store.dispatch(fetchSessions(slug))
store.dispatch(setDays(getDays(slug)))
store.dispatch(setSelectedDay(getSelectedDayBySlug(slug)))

const Main = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

export default Main