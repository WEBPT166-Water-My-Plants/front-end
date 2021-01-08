import { combineReducers } from 'redux';
import plantReducer from './plantsReducer';
import userReducer from './userReducer';

const allReducers = combineReducers({
  user: userReducer,
  plants: plantReducer,
});

export default allReducers;
