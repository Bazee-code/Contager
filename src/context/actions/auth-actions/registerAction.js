import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from '../../../helpers/axiosInterceptor';
import {
  CLEAR_AUTH_STATE,
  REGISTER_ERRORS,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../../action-types/authActionTypes';

export const clearAuthStateAction = () => dispatch => {
  dispatch({
    type: CLEAR_AUTH_STATE,
  });
};

const registerAction =
  ({
    email,
    password,
    userName: username,
    firstName: first_name,
    lastName: last_name,
  }) =>
  dispatch =>
  onSuccess => {
    dispatch({
      type: REGISTER_LOADING,
    });
    axiosInstance
      .post('/auth/register', {
        email,
        password,
        username,
        first_name,
        last_name,
      })
      .then(res => res.data)
      .then(data => {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: data,
        });
        onSuccess(data);
      })
      .catch(e => {
        dispatch({
          type: REGISTER_ERRORS,
          payload: e.response
            ? e.response.data
            : {error: 'Something went wrong!'},
        });
      });
  };

export default registerAction;
