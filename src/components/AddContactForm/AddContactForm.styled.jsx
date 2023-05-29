import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  background-color: rgba(0, 21, 255, 0.5);
  display: flex;
  align-items: flex-end;
  padding: 13px 20px 20px 20px;
  border-radius: 4px;
  box-shadow: 7px 7px rgb(170, 255, 0), 0px 0px 0px rgb(170, 255, 0);
`;

export const StyledLabel = styled.label`
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 5px;
  color: #fff;
`;

export const StyledInput = styled(Field)`
  font-size: 15px;
  max-width: 150px;
  font-weight: 700;
  color: #999898a0;
  border: none;
  height: 25px;
  padding-left: 5px;
  border-radius: 4px;
`;

export const StyledButton = styled.button`
  display: flex;
  padding: 5px;
  width: 150px;
  font-weight: 900;
  height: 27px;
  font-size: 17px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 21, 255, 0.01);
  border-radius: 4px;
  border: 2px solid #fff;
  color: #fff;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1), border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    color: #acfc00;
    border: 2px solid #acfc00;
  }

  &:disabled {
    color: #ffffff84;
    border: 2px solid #ffffff84;
  }
`;

export const InputAndErrorWrapper = styled.div`
  position: relative;
`;

export const ErrorText = styled.p`
  position: absolute;
  bottom: -57px;
  width: 140px;
  font-weight: 900;
  font-size: 9px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgb(252, 74, 29);
`;
