import { Box } from 'components/Box/Box';

import { StyledNavLink } from './AuthUserNav.styled';

export const AuthNav = () => {
  return (
    <Box>
      <StyledNavLink to="signin">Sign In</StyledNavLink>
      <StyledNavLink to="signup">Sign Up</StyledNavLink>
    </Box>
  );
};
