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

import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

const serializableMiddleware = createSerializableStateInvariantMiddleware({
  ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
});

const middleware = [thunk, serializableMiddleware];

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

const persistor = persistStore(store);

// eslint-disable-next-line
export default { store, persistor };
