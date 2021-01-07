import { applyMiddleware, createStore } from 'redux';
import Thunk from 'redux-thunk';
import allReducers from '../reducers';

const store = createStore(allReducers, applyMiddleware(Thunk));

export default store;
