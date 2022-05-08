import { connect } from 'react-redux';
import { default as Navigation } from './Navigation';

import { authSelectors } from 'store/auth';

const mapStateToProps = (state) => ({
  isLoggedIn: authSelectors.getLoggedIn(state),
});

export default connect(mapStateToProps)(Navigation);
