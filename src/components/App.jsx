import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import LinearProgress from '@mui/material/LinearProgress';

import MainLayout from 'layouts/MainLayout';
import PrivateRoute from 'components/hoc/PrivateRoute';
import PublicRoute from 'components/hoc/PublicRoute';
import LoadingScreen from 'components/LoadingScreen';

import { authOperations, authSelectors } from 'store/auth';

const HomePage = lazy(() => import('pages/HomePage'));
const SignUpPage = lazy(() => import('pages/SignUpPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));

const App = () => {
  const dispatch = useDispatch();

  const isLoadingUser = useSelector(authSelectors.getIsLoadingUser);

  useEffect(() => {
    dispatch(authOperations.refresh());
  }, [dispatch]);

  if (isLoadingUser) return <LoadingScreen />;

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
