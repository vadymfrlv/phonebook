import styled from 'styled-components';

export const StyledContactsList = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0;
  padding: 20px;

  background-color: rgba(0, 21, 255, 0.5);
  border-radius: 4px;
  box-shadow: 7px 7px rgb(170, 255, 0), 0px 0px 0px rgb(170, 255, 0);
`;

export const StyledContactsListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 5px;

  color: #fff;
  background-color: rgba(0, 21, 255, 0.01);
  border-radius: 4px;
  border-radius: 10px;
  border: 2px solid #fff;

  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1), border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:not(:last-child) {
    margin-bottom: 9px;
  }

  &:hover,
  &:focus {
    color: #acfc00;
    border: 2px solid #acfc00;
  }
`;
