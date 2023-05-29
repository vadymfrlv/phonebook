import styled from 'styled-components';
import { Field } from 'formik';

export const StyledLabel = styled.label`
  display: flex;
  color: #fff;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  margin-bottom: 20px;
`;

export const StyledField = styled(Field)`
  display: flex;
  font-size: 15px;
  width: 200px;
  font-weight: 700;
  margin-left: 20px;
  color: #3c3c3c;
  border: none;
  height: 25px;
  border-radius: 4px;
`;
