import { Navigate } from 'react-router-dom';

import { useAuthStatus } from 'hooks/useAuthStatus';

export const RestrictedRoute = ({ component: Component, redirectTo = '/', restricted = false }) => {
  const { isLoggedIn } = useAuthStatus();
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
