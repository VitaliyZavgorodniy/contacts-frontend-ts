import { connect } from 'react-redux';
import { default as SignUpPage } from './SignUpPage';

import { authSelectors } from 'store/auth';
import { authOperations } from 'store/auth';

const mapStateToProps = (state) => ({
  isLoggedIn: authSelectors.getLoggedIn(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLogin: (data) => dispatch(authOperations.logIn(data)),
  onLogout: () => dispatch(authOperations.logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
