import {
  configureStore,
  createSerializableStateInvariantMiddleware,
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import thunk from 'redux-thunk';
import thunkMiddleware from 'redux-thunk';

import storage from 'redux-persist/lib/storage';

import { authReducer } from './auth';
import { contactsReducer } from './contacts';
import { filterReducer } from './filter';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const serializableMiddleware = createSerializableStateInvariantMiddleware({
  ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
});

const middleware = [thunk, serializableMiddleware, thunkMiddleware];

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    filter: filterReducer,
    contacts: contactsReducer,
  },
  middleware,
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// eslint-disable-next-line
export default { store, persistor };
