import { axiosWithAuth } from '../utils/axiosWithAuth';
import { LOG_ON, IS_FETCHING, FETCHING_SUCCESS, LOG_OFF } from './actionTypes';

export const setIsLoggedOn = () => ({
  type: LOG_ON,
});
export const setIsLoggedOff = () => ({
  type: LOG_OFF,
});
export const isLoading = () => ({
  type: IS_FETCHING,
});
export const setUserData = (userData) => ({
  type: FETCHING_SUCCESS,
  payload: userData,
});
export const updateUserWithUsername = (dispatch, username) => {
  dispatch(isLoading());
  axiosWithAuth()
    .get('/api/auth/users')
    .then((res) => {
      const user = res.data.find((user) => user.username === username);
      if (user) dispatch(setUserData(user));
    });
};
export const logoutUser = (dispatch) => {
  window.localStorage.removeItem('token');
  dispatch(setIsLoggedOff());
};
