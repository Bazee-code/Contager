import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from '../../../helpers/axiosInterceptor';
import {
  LOGIN_ERRORS,
  LOGIN_START,
  LOGIN_SUCCESS,
} from '../../action-types/authActionTypes';

const loginAction =
  ({userName: username, password}) =>
  dispatch => {
    dispatch({
      type: LOGIN_START,
    });

    axiosInstance
      .post(`/auth/login`, {
        username,
        password,
      })
      .then(res => res.data)
      .then(data => {
        AsyncStorage.setItem('token', data.token);
        AsyncStorage.setItem('user', JSON.stringify(data.user));
        dispatch({
          type: LOGIN_SUCCESS,
          payload: data,
        });
      })
      .catch(e => {
        dispatch({
          type: LOGIN_ERRORS,
          payload: e.response
            ? e.response.data
            : {error: 'something went wrong!'},
        });
      });
  };

export default loginAction;
