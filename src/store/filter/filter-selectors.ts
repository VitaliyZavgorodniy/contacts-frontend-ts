import { RootState } from 'store';

const getFilter = (state: RootState) => state.filter;

const filterSelectors = {
  getFilter,
};

export default filterSelectors;
