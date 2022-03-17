import React from 'react';
import {
  REGISTER_ERRORS,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../action-types/authActionTypes';

const authReducer = (state, action) => {
  const {type, payload} = action;

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
  }
};

export default authReducer;
