import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import { AppBar } from 'components/AppBar';
import { RestrictedRoute, PrivateRoute } from 'components/Routes';
import { useFetchCurrentUserQuery } from 'redux/auth/authApi';
import { fetchCurrentUser } from 'redux/user/userSlice';
import { useAuthStatus } from 'hooks/useAuthStatus';

const HomePage = lazy(() => import('pages/Home/Home'));
const SignInPage = lazy(() => import('pages/SignIn/SignIn'));
const SignUpPage = lazy(() => import('pages/SignUp/SignUp'));
const ContactsPage = lazy(() => import('pages/Contacts/Contacts'));

export const App = () => {
  const { token } = useAuthStatus();
  const { data: currentUser, isLoading } = useFetchCurrentUserQuery('', { skip: token === null });

  const dispatch = useDispatch();

  useEffect(() => {
    if (token && currentUser) {
      dispatch(fetchCurrentUser(currentUser));
    }
  }, [dispatch, token, currentUser]);

  return (
    !isLoading && (
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<RestrictedRoute component={<HomePage />} />} />
          <Route
            path="signin"
            element={
              <RestrictedRoute restricted redirectTo="/contacts" component={<SignInPage />} />
            }
          />
          <Route
            path="signup"
            element={
              <RestrictedRoute restricted redirectTo="/contacts" component={<SignUpPage />} />
            }
          />
          <Route
            path="contacts"
            element={<PrivateRoute redirectTo="/signin" component={<ContactsPage />} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    )
  );
};
