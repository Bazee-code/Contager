import {
  CLEAR_AUTH_STATE,
  LOGIN_START,
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
        loading: false,
      };

    case LOGIN_ERRORS:
      return {
        ...state,
        errors: payload,
        loading: false,
      };

    case CLEAR_AUTH_STATE:
      return {
        ...state,
        loading: false,
        data: null,
        error: null,
      };

    default:
      return state;
  }
};

export default authReducer;
