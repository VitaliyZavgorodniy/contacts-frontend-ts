import { combineReducers } from 'redux';

import { contactsReducer, isLoading, contactsError } from './contactsReducer';
import { filterReducer } from './filterReducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  isLoading: isLoading,
  contactsError: contactsError,
});

export default rootReducer;
