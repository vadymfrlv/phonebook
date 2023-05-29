import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Box } from 'components/Box/Box';
import { Navigation, AuthNav } from 'components/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { getIsLoggedIn } from 'redux/user/userSlice';

import { Header, HeaderContainer } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Box>
      <Header>
        <HeaderContainer>
          <Navigation />
          {!isLoggedIn ? <AuthNav /> : <UserMenu />}
        </HeaderContainer>
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
