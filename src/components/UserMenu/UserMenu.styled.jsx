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
  fontSize: 13,
  fontWeight: 900,
  letterSpacing: 1,
  borderWidth: 2,
  padding: '2px 6px',
  backgroundColor: 'transparent',
  borderColor: 'rgba(255, 255, 255, 0.676)',
  color: 'rgba(255, 255, 255, 0.676)',
  '&:hover': {
    borderColor: '#acfc00',
    color: '#acfc00',
    borderWidth: 2,
  },
};

export const StyledButton = styled(Button)`
  && {
    ${buttonSX}
  }
`;
