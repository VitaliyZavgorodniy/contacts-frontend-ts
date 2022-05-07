import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export const signUp = async () =>
  await axios.post('/users/signup', {
    name: 'Test User',
    email: 'across555@mail.com',
    password: 'example1234567',
  });

export const logIn = async () =>
  await axios.post('/users/login', {
    email: 'across555@mail.com',
    password: 'example1234567',
  });
