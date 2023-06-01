import styled from 'styled-components';

import { Button } from '@mui/material';

export const Menu = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  margin-right: 10px;
`;

export const UserName = styled.p`
  margin-right: 20px;

  font-weight: 800;
  font-size: 13px;
  text-align: center;
  letter-spacing: 0.07em;
  text-transform: uppercase;

  color: #acfc00;
`;

const buttonSX = {
  padding: '2px 6px',

  fontWeight: 900,
  fontSize: 13,
  letterSpacing: 1,

  color: 'rgba(255, 255, 255, 0.676)',
  borderColor: 'rgba(255, 255, 255, 0.676)',
  backgroundColor: 'transparent',
  borderWidth: 2,

  '&:hover': {
    color: '#acfc00',
    borderColor: '#acfc00',
    borderWidth: 2,
  },
};

export const StyledButton = styled(Button)`
  && {
    ${buttonSX}
  }
`;
