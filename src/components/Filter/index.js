import { connect } from 'react-redux';
import { default as Filter } from './Filter';

import { updateFilter } from 'store/actions/filterActions';
import { getFilter } from 'selectors/contactSelector';

const mapStateToProps = (state) => ({
  value: getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onUpdate: (value) => dispatch(updateFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
