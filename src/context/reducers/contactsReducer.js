const contactsReducer = (state, action) => {
  const {type, payload} = action;

  switch (type) {
    case 'GET_CONTACTS':
      return state;

    default:
      return state;
  }
};

export default contactsReducer;
