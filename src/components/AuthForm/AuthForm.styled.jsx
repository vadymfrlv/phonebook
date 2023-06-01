import styled from 'styled-components';
import { Form } from 'formik';
import { TextField, Button } from '@mui/material';

export const AuthFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 150px;
`;

export const Title = styled.h1`
  margin-left: auto;
  margin-bottom: 25px;
  margin-right: auto;

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
  flex-direction: column;
  width: 370px;
  margin-left: auto;
  margin-right: auto;
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
      margin: 0;
      font-weight: 700;
      font-size: 17px;

      color: rgba(255, 255, 255, 0.676);
    }

    label {
      font-weight: 700;
      font-size: 15px;

      color: rgba(255, 255, 255, 0.676);
    }

    ${textFieldSX}
  }
`;

const buttonSX = {
  fontWeight: 700,
  fontSize: 17,
  letterSpacing: 1,

  color: 'rgba(0, 21, 255, 0.5)',
  backgroundColor: 'transparent',
  borderWidth: 2,
  borderColor: 'rgba(0, 21, 255, 0.5)',
  '&:hover': {
    color: '#acfc00',
    borderWidth: 2,
    borderColor: '#acfc00',
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
