import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import {reducer as editorReducer} from './editor/';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const store = createStore(editorReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

export default store;