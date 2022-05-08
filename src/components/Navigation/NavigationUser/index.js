import { connect } from 'react-redux';
import { default as NavigationUser } from './NavigationUser';

import { authSelectors } from 'store/auth';
import { authOperations } from 'store/auth';

const mapStateToProps = (state) => ({
  user: authSelectors.getUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(authOperations.logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationUser);
