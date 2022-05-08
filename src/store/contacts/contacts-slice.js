import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contacts-operations';

const initialState = {
  items: [],
  isFetchingContacts: false,
  isFetchingCreate: false,
  isFetchingRemove: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactsOperations.fetch.pending]: (state) => {
      state.isFetchingContacts = true;
    },
    [contactsOperations.fetch.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.isFetchingContacts = false;
    },
    [contactsOperations.fetch.rejected]: (state) => {
      state.isFetchingContacts = false;
    },

    [contactsOperations.create.pending]: (state) => {
      state.isFetchingCreate = true;
    },
    [contactsOperations.create.fulfilled]: (state, { payload }) => {
      state.items = [...state.items, payload];
      state.isFetchingCreate = false;
    },
    [contactsOperations.create.rejected]: (state) => {
      state.isFetchingCreate = false;
    },

    [contactsOperations.remove.pending]: (state) => {
      state.isFetchingRemove = true;
    },
    [contactsOperations.remove.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter((contact) => contact.id !== payload);
      state.isFetchingRemove = false;
    },
    [contactsOperations.remove.rejected]: (state) => {
      state.isFetchingRemove = false;
    },
  },
});

export default contactsSlice.reducer;
