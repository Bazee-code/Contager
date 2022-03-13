import React from 'react';

const authReducer = (state, action) => {
  const {type, payload} = action;

  switch (type) {
    case 'LOGIN':
      return {};

    default:
      return state;
  }
};

export default authReducer;
