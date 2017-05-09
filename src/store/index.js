import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'remote-redux-devtools';
import sagas from '../sagas';
import reducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({ name: 'appZone', realtime: true, port: 8083 });
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(sagaMiddleware)
))

sagaMiddleware.run(sagas);

export default () => (store);