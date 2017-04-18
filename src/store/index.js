import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas';
import reducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

export default () => (store);
