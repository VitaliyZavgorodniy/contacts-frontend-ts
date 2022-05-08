import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const fetch = createAsyncThunk('contacts/fetch', async () => {
  try {
    const { data } = await axios.get('/contacts');

    return data;
  } catch (err) {
    console.err(err);
    return err;
  }
});

const create = createAsyncThunk('contacts/create', async (contact) => {
  try {
    const { data } = await axios.post('/contacts', contact);

    return data;
  } catch (err) {
    console.err(err);
    return err;
  }
});

const remove = createAsyncThunk('contacts/remove', async (id) => {
  try {
    await axios.delete(`/contacts/${id}`);

    return id;
  } catch (err) {
    console.err(err);
    return err;
  }
});

const operations = {
  fetch,
  create,
  remove,
};

export default operations;
