import styled from 'styled-components';

export const StyledContact = styled.p`
  display: flex;
  align-items: center;
  margin: 5px;

  font-weight: 700;
  font-size: 15px;

  cursor: pointer;
`;

export const DeleteContactBtn = styled.button`
  width: 80px;
  padding: 5px;

  font-weight: 700;
  font-size: 13px;

  color: #fff;
  background-color: rgba(0, 21, 255, 0.01);
  border-radius: 4px;
  border: 2px solid #fff;

  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1), border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #f23809;
    border: 2px solid #f23f09;
  }
`;
