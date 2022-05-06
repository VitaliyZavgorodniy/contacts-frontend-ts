import { createReducer } from '@reduxjs/toolkit';
import { updateFilter } from 'store/actions/filterActions';

export const filterReducer = createReducer('', {
  [updateFilter]: (_, { payload }) => payload,
});