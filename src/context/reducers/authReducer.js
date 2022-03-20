import {
  CLEAR_AUTH_STATE,
  LOGIN_ERRORS,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  REGISTER_ERRORS,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../action-types/authActionTypes';

const authReducer = (state, {type, payload}) => {
  switch (type) {
    case REGISTER_LOADING:
      return {
        ...state,
        loading: true,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
      };

    case LOGIN_ERRORS:
    case REGISTER_ERRORS:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case LOGIN_START:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        data: payload,
        isLoggedIn: true,
        loading: false,
      };

    case CLEAR_AUTH_STATE:
      return {
        ...state,
        loading: false,
        data: null,
        error: null,
      };

    case LOGOUT_USER:
      return {
        ...state,
        loading: false,
        data: null,
        error: null,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};

export default authReducer;
