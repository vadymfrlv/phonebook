import styled from 'styled-components';

export const StyledContact = styled.p`
  margin: 5px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const DeleteContactBtn = styled.button`
  padding: 5px;
  width: 80px;
  font-weight: 700;
  font-size: 13px;
  background-color: rgba(0, 21, 255, 0.01);
  border-radius: 4px;
  border: 2px solid #fff;
  cursor: pointer;
  color: #fff;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1), border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #f23809;
    border: 2px solid #f23f09;
  }
`;
