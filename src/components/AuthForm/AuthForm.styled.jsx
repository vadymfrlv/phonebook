import styled from 'styled-components';
import { Form } from 'formik';
import { TextField, Button } from '@mui/material';

export const AuthFormContainer = styled.div`
  display: flex;
  margin-top: 150px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin-right: auto;
  margin-bottom: 25px;
  margin-left: auto;

  font-weight: 700;
  font-size: 35px;
  letter-spacing: 0.3em;
  text-align: center;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.676);

  background: linear-gradient(to right, #fff 20%, #acfc00 40%, #acfc00 60%, #fff 80%);
  background-size: 200% auto;

  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 2000ms linear infinite;

  @-webkit-keyframes shine {
    to {
      background-position: 200% center;
    }
  }
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
`;

export const TextFieldAndErrorWrapper = styled.div`
  position: relative;
`;

export const ErrorText = styled.p`
  position: absolute;
  bottom: 8px;
  font-weight: 900;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgb(252, 74, 29);
`;

export const StyledForm = styled(Form)`
  display: flex;
  width: 370px;
  margin-right: auto;
  margin-left: auto;
  flex-direction: column;
`;

const textFieldSX = {
  '& .MuiOutlinedInput-root': {
    '& > fieldset': {
      borderWidth: 2,
      borderColor: 'rgba(255, 255, 255, 0.676)',
    },
    '&:hover fieldset': {
      borderColor: '#acfc00',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#acfc00',
    },
  },
};

export const StyledTextField = styled(TextField)`
  width: 100%;
  margin-bottom: 20px;

  && {
    input {
      font-size: 17px;
      margin: 0;
      font-weight: 700;
      color: rgba(255, 255, 255, 0.676);
    }

    label {
      font-size: 15px;
      font-weight: 700;
      color: rgba(255, 255, 255, 0.676);
    }

    ${textFieldSX}
  }
`;

const buttonSX = {
  fontSize: 17,
  fontWeight: 700,
  letterSpacing: 1,
  borderWidth: 2,
  backgroundColor: 'transparent',
  borderColor: 'rgba(0, 21, 255, 0.5)',
  color: 'rgba(0, 21, 255, 0.5)',
  '&:hover': {
    borderColor: '#acfc00',
    color: '#acfc00',
    borderWidth: 2,
  },
};

export const StyledButton = styled(Button)`
  position: relative;
  && {
    ${buttonSX}
  }
`;

export const Error = styled.p`
  margin-top: 16px;
  font-weight: 900;
  font-size: 13px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgb(252, 74, 29);
`;
