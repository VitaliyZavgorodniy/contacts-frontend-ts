import { connect } from 'react-redux';
import { default as Filter } from './Filter';

import { updateFilter } from 'store/filter';
import { filterSelectors } from 'store/filter';

const mapStateToProps = (state) => ({
  value: filterSelectors.getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onUpdate: (value) => dispatch(updateFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
