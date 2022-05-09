import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import authSelectors from './auth-selectors';

import { showNotification } from 'utils/showNotification';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const token = {
  set: (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset: () => {
    axios.defaults.headers.common.Authorization = '';
  },
};

const signUp = createAsyncThunk(
  'auth/signup',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);

      token.set(data.token);

      return data;
    } catch (err) {
      console.log(err?.response?.data);
      if (err?.response?.data?.errors) {
        const { email, password } = err.response.data.errors;

        if (email?.message) showNotification(email.message);
        if (password?.message) showNotification(password.message);
      }

      if (err?.response?.data?.name === 'MongoError') {
        showNotification('User already exists!');
      }

      return rejectWithValue(err.response.data);
    }
  }
);

const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', credentials);

      token.set(data.token);

      return data;
    } catch (err) {
      showNotification('Incorrect email or password!');
      return rejectWithValue(err.response.data);
    }
  }
);

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    const { data } = await axios.post('/users/logout');

    token.unset();

    return data;
  } catch (err) {
    console.error(err);
  }
});

const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const persistedToken = authSelectors.getToken(thunkAPI.getState());

  if (persistedToken === null) return thunkAPI.rejectWithValue();

  token.set(persistedToken);

  try {
    const { data } = await axios.get('/users/current');

    return data;
  } catch (err) {
    console.error(err);
  }
});

const operations = {
  signUp,
  logIn,
  logOut,
  refresh,
};

export default operations;
