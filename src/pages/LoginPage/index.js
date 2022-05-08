import { connect } from 'react-redux';
import { default as LoginPage } from './LoginPage';

import { authSelectors } from 'store/auth';
import { authOperations } from 'store/auth';

const mapStateToProps = (state) => ({
  isFetching: authSelectors.getIsFetching(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLogin: (data) => dispatch(authOperations.logIn(data)),
  onLogout: () => dispatch(authOperations.logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
