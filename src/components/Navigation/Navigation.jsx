import { Box } from 'components/Box/Box';
import { useAuthStatus } from 'hooks/useAuthStatus';

import { StyledNavLink } from './AuthUserNav.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuthStatus();

  return (
    <Box as="nav">
      <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </Box>
  );
};
