import axios from 'axios';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  createContactRequest,
  createContactSuccess,
  createContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
} from '../actions/contactsActions';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest());

  await axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch((error) => dispatch(fetchContactsError(error)));
};

export const createContact = (contact) => async (dispatch) => {
  dispatch(createContactRequest());

  await axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(createContactSuccess(data)))
    .catch((error) => dispatch(createContactError(error)));
};

export const removeContact = (id) => async (dispatch) => {
  dispatch(removeContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(removeContactSuccess(id)))
    .catch((error) => dispatch(removeContactError(error)));
};
