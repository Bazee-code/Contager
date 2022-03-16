import axiosInstance from '../../../helpers/axiosInterceptor';
import { REGISTER_LOADING } from '../../action-types/authActionTypes';

export default ({
  email,
  password,
  username,
  firstName: first_name,
  lastName: last_name,
}) => dispatch =>{
    // loading
    dispatch({
        type: REGISTER_LOADING
    })
  axiosInstance
    .post('/auth/register', {
      email,
      password,
      username,
      first_name,
      last_name,
    })
    .then(res => res.data)
    .then(data => {})
    .catch(e => {
      console.log(e);
    });
};
