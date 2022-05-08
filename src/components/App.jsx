import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import SignUpPage from 'pages/SignUpPage';
import LoginPage from 'pages/LoginPage';

import MainLayout from 'layouts/MainLayout';
import PrivateRoute from 'components/hoc/PrivateRoute';
import PublicRoute from 'components/hoc/PublicRoute';

import { authOperations } from 'store/auth';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.refresh());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<PrivateRoute component={<HomePage />} />} />

        <Route
          path="signup"
          element={<PublicRoute component={<SignUpPage />} />}
        />
        <Route
          path="login"
          element={<PublicRoute component={<LoginPage />} />}
        />
      </Route>
    </Routes>
  );
};

export default App;
