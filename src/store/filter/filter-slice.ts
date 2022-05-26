import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterType } from 'types/FilterType';

const initialState: FilterType = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateFilter: (state: FilterType, action: PayloadAction<FilterType>) =>
      action.payload,
  },
});

export const { updateFilter } = filterSlice.actions;
export default filterSlice.reducer;
