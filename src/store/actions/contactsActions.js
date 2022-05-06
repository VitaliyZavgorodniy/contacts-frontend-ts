import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction('contacts/fetchRequest');
export const fetchContactsSuccess = createAction('contacts/fetchSuccess');
export const fetchContactsError = createAction('contacts/fetchError');

export const createContactRequest = createAction('contacts/createRequest');
export const createContactSuccess = createAction('contacts/createSuccess');
export const createContactError = createAction('contacts/createError');

export const removeContactRequest = createAction('contacts/removeRequest');
export const removeContactSuccess = createAction('contacts/removeSuccess');
export const removeContactError = createAction('contacts/removeError');