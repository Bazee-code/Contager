import axios from 'axios';
import {LOGIN_ERRORS, LOGIN_START, LOGIN_SUCCESS} from '../../action-types/authActionTypes';

const loginAction = (userData) => dispatch => {
  dispatch({
    type: LOGIN_START,
  });

  axiosInstance 
    .post(``,userData)
    .then(res=>res.data)
    .then((data)=>{
        dispatch({
            type : LOGIN_SUCCESS,
            payload : data
        })
    })
    .catch((e)=>{
        dispatch({
            type: LOGIN_ERRORS,
            payload : e.response ? e.response.data : {error : 'something went wrong!'}
        })
    })
};

export default loginAction;
