import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  padding-top: 5px;
  padding-bottom: 5px;

  font-weight: 900;
  font-size: 20px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.676);

  &:not(:last-child) {
    margin-right: 20px;
  }

  &:hover,
  &:focus {
    color: rgba(255, 255, 255, 0.535);
  }

  &.active {
    /* display: inline-block;
    margin-right: 20px;
    padding-top: 12px;
    padding-bottom: 12px; */

    /* font-weight: 900;
    text-transform: uppercase; */
    /* color: #acfc00; */
    text-shadow: 0 0 3px #acfc00, 0 0 8px #acfc00, 0 0 13px #acfc00, 0 0 17px #acfc00,
      0 0 22px #acfc00, 0 0 27px #acfc00, 0 0 32px #acfc00;
  }

  /* &.active:last-child {
    margin-right: 0;
  } */
`;
