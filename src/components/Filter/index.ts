import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { default as FilterComponent } from './Filter';
import { FilterType } from 'types/FilterType';
import { RootState } from 'store';

import { updateFilter } from 'store/filter';
import { filterSelectors } from 'store/filter';

const mapStateToProps = (state: RootState) => ({
  value: filterSelectors.getFilter(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onUpdate: (value: FilterType) => dispatch(updateFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterComponent);
