import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { authSelectors } from 'store/auth';

const PrivateRoute = ({ component }) => {
  const auth = useSelector(authSelectors.getLoggedIn);

  return auth ? component : <Navigate to="/login" />;
};

export default PrivateRoute;
