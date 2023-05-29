import { useSelector } from 'react-redux';

import { getToken, getIsLoggedIn, getIsFetchCurrentUser } from 'redux/user/userSlice';

export const useAuthStatus = () => {
  const token = useSelector(getToken);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isFetchCurrentUser = useSelector(getIsFetchCurrentUser);

  return {
    token,
    isLoggedIn,
    isFetchCurrentUser,
  };
};
