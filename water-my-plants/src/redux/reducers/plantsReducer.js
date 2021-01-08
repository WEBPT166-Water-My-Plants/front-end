import { PLANTS_FETCHING_SUCCESS } from '../actionTypes';

const initialState = {};

function plantReducer(state = initialState, action) {
  switch (action.type) {
    case PLANTS_FETCHING_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export default plantReducer;
