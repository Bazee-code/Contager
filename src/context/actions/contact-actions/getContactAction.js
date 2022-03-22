import {
  GET_CONTACTS_ERRORS,
  GET_CONTACTS_START,
  GET_CONTACTS_SUCCESS,
} from '../../action-types/contactsActionTypes';

const getContactAction = () => dispatch => {
  dispatch({
    type: GET_CONTACTS_START,
  });

  axiosInstance
    .get(`/contacts`)
    .then(res => res.data)
    .then(data => {
      dispatch({
        type: GET_CONTACTS_SUCCESS,
        payload: data,
      });
    })
    .catch(e => {
      dispatch({
        type: GET_CONTACTS_ERRORS,
        payload: e ? e.response.data : {error: 'Something went wrong'},
      });
    });
};

export default getContactAction;
