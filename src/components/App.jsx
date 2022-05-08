import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import LinearProgress from '@mui/material/LinearProgress';

import MainLayout from 'layouts/MainLayout';
import PrivateRoute from 'components/hoc/PrivateRoute';
import PublicRoute from 'components/hoc/PublicRoute';

import { authOperations } from 'store/auth';

const HomePage = lazy(() => import('pages/HomePage'));
const SignUpPage = lazy(() => import('pages/SignUpPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.refresh());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <PrivateRoute
              component={
                <Suspense fallback={<LinearProgress />}>
                  <HomePage />
                </Suspense>
              }
            />
          }
        />

        <Route
          path="signup"
          element={
            <PublicRoute
              component={
                <Suspense fallback={<LinearProgress />}>
                  <SignUpPage />
                </Suspense>
              }
            />
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute
              component={
                <Suspense fallback={<LinearProgress />}>
                  <LoginPage />
                </Suspense>
              }
            />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
