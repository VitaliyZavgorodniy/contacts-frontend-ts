import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetching: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.signUp.pending]: (state) => {
      state.isFetching = true;
    },
    [authOperations.signUp.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isFetching = false;
    },
    [authOperations.signUp.rejected]: (state) => {
      state.isFetching = false;
    },

    [authOperations.logIn.pending]: (state) => {
      state.isFetching = true;
    },
    [authOperations.logIn.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isFetching = false;
    },
    [authOperations.logIn.rejected]: (state) => {
      state.isFetching = false;
    },

    [authOperations.logOut.fulfilled]: (state) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },

    [authOperations.refresh.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;
