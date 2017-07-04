import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'remote-redux-devtools'
import sagas from '../sagas'
import reducer from '../reducers'
import logger from 'redux-logger'


    const sagaMiddleware = createSagaMiddleware()
    const enhancer = composeWithDevTools({ name: 'appZone', realtime: true, port: 8083, hostname: 'localhost' })

    const store = createStore(reducer, enhancer(
        applyMiddleware(sagaMiddleware,logger)
    ));

sagaMiddleware.run(sagas)


export default ()=> (store)