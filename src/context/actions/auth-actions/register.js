import axiosInstance from '../../../helpers/axiosInterceptor';
import {
  REGISTER_ERRORS,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../../action-types/authActionTypes';

export default ({
    email,
    password,
    username,
    firstName: first_name,
    lastName: last_name,
  }) =>
  dispatch => {
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
