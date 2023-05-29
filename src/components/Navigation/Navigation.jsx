import { useSelector } from 'react-redux';

import { Box } from 'components/Box/Box';
import { getIsLoggedIn } from 'redux/user/userSlice';

import { StyledNavLink } from './AuthUserNav.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Box as="nav">
      <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </Box>
  );
};
