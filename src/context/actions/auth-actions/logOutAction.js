import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOGOUT_USER} from '../../action-types/authActionTypes';

const logoutAction = () => dispatch => () => {
  AsyncStorage.removeItem('token');
  AsyncStorage.removeItem('user');

  dispatch({
    type: LOGOUT_USER,
  });
};

export default logoutAction;
