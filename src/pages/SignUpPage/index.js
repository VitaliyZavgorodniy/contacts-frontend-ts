import { connect } from 'react-redux';
import { default as SignUpPage } from './SignUpPage';

import { authSelectors } from 'store/auth';
import { authOperations } from 'store/auth';

const mapStateToProps = (state) => ({
  isFetching: authSelectors.getLoggedIn(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSignup: (data) => dispatch(authOperations.signUp(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);

// vitaliy2@mail.com
// 1234567