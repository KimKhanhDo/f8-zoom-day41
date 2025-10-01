import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '@/store/reducer';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

window.store = store;

export default store;
