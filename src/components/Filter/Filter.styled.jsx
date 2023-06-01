import styled from 'styled-components';
import { Field } from 'formik';

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  font-weight: 700;
  font-size: 15px;

  color: #fff;
`;

export const StyledField = styled(Field)`
  display: flex;
  width: 200px;
  height: 25px;
  margin-left: 20px;

  font-weight: 700;
  font-size: 15px;

  color: #3c3c3c;
  border: none;
  border-radius: 4px;
`;
