import { axiosWithAuth } from '../utils/axiosWithAuth';
import {
  LOG_ON,
  IS_FETCHING,
  USER_FETCHING_SUCCESS,
  PLANTS_FETCHING_SUCCESS,
  LOG_OFF,
} from './actionTypes';

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
  type: USER_FETCHING_SUCCESS,
  payload: userData,
});
export const setUsersPlants = (userData) => ({
  type: PLANTS_FETCHING_SUCCESS,
  payload: userData,
});
export const updateUserWithUsername = (dispatch, username) => {
  dispatch(isLoading());
  axiosWithAuth()
    .get('/api/users')
    .then((res) => {
      const user = res.data.find((user) => user.username === username);
      if (user) dispatch(setUserData(user));
    });
};
export const updateUsersPlants = (dispatch, id) => {
  dispatch(isLoading());
  axiosWithAuth()
    .get(`/api/users/${id}/plants`)
    .then((res) => {
      dispatch(setUsersPlants(res.data));
    });
};
export const logoutUser = (dispatch) => {
  window.localStorage.removeItem('token');
  dispatch(setIsLoggedOff());
};
