import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100%;

  padding-top: 12px;
  padding-bottom: 12px;
  border-bottom: 2px solid #acfc00;
  background-color: rgba(0, 21, 255, 0.5);
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;
