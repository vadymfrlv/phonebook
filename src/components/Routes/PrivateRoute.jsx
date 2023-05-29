import { Navigate } from 'react-router-dom';

import { useAuthStatus } from 'hooks/useAuthStatus';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isFetchCurrentUser } = useAuthStatus();
  const shouldRedirect = !isLoggedIn && !isFetchCurrentUser;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
