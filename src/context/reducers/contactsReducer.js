import {
  GET_CONTACTS_ERRORS,
  GET_CONTACTS_START,
  GET_CONTACTS_SUCCESS,
} from '../action-types/contactsActionTypes';

const contactsReducer = (state, {type, payload}) => {
  console.log('state', state);
  switch (type) {
    case GET_CONTACTS_START:
      return {
        ...state,
        loading: true,
      };

    case GET_CONTACTS_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
      };

    case GET_CONTACTS_ERRORS:
      return {
        ...state,
        errors: payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default contactsReducer;
