import {
  IS_FETCHING,
  LOG_ON,
  USER_FETCHING_SUCCESS,
  LOG_OFF,
} from '../actionTypes';

const initialState = {
  isLoggedIn: window.localStorage.token !== null,
  isLoading: false,
  userData: {},
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_ON:
      return { ...state, isLoggedIn: true };
    case LOG_OFF:
      return { ...state, isLoggedIn: false };
    case IS_FETCHING:
      return { ...state, isLoading: true };
    case USER_FETCHING_SUCCESS:
      return { ...state, isLoading: false, userData: action.payload };
    default:
      return state;
  }
}

export default userReducer;
