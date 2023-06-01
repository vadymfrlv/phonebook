import { useSelector } from 'react-redux';

import { getUserName, getToken, getIsLoggedIn, getIsFetchCurrentUser } from 'redux/user/userSlice';

export const useAuthStatus = () => {
  const userName = useSelector(getUserName);
  const token = useSelector(getToken);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isFetchCurrentUser = useSelector(getIsFetchCurrentUser);

  return {
    userName,
    token,
    isLoggedIn,
    isFetchCurrentUser,
  };
};
