import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { authSelectors } from 'store/auth';

const PublicRoute = ({ component }) => {
  const auth = useSelector(authSelectors.getLoggedIn);

  return auth ? <Navigate to="/" /> : component;
};

export default PublicRoute;
