import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateFilter: (_, { payload }) => payload,
  },
});

export const { updateFilter } = filterSlice.actions;
export default filterSlice.reducer;
