import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Box } from 'components/Box/Box';
import { Navigation, AuthNav } from 'components/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuthStatus } from 'hooks/useAuthStatus';

import { Header, HeaderContainer } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuthStatus();

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
