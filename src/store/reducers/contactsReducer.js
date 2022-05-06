import { createReducer } from '@reduxjs/toolkit';
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

export const contactsReducer = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [createContactSuccess]: (state, { payload }) => [...state, payload],
  [removeContactSuccess]: (state, { payload }) =>
    state.filter((item) => item.id !== payload),
});

export const isLoading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,

  [createContactRequest]: () => true,
  [createContactSuccess]: () => false,
  [createContactError]: () => false,

  [removeContactRequest]: () => true,
  [removeContactSuccess]: () => false,
  [removeContactError]: () => false,
});

export const contactsError = createReducer('', {
  [fetchContactsError]: () => 'Error getting contact',
  [createContactError]: () => 'Error creating contacts',
  [removeContactError]: () => 'Error removing contacts',
});
