import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import avatar from 'assets/images/avatar.png';
import { Menu, Avatar, UserName, StyledButton } from './UserMenu.styled';
import { useUserLogoutMutation } from 'redux/auth/authApi';
import { getUserName, userLogout } from 'redux/user/userSlice';

export const UserMenu = () => {
  const [logout] = useUserLogoutMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector(getUserName);

  const handleUserLogout = async () => {
    try {
      await logout();
      dispatch(userLogout());
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Menu>
      <Avatar src={avatar} width="30" height="30" alt="avatar icon" />
      <UserName>Hi, {name}</UserName>

      <StyledButton type="button" variant="outlined" onClick={handleUserLogout}>
        Log Out
      </StyledButton>
    </Menu>
  );
};
