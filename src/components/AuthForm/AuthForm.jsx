import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Formik, Field, ErrorMessage } from 'formik';

import { signInSchema, signUpSchema } from 'utils/schemas/authValidation';
import { useUserSignUpMutation, useUserSignInMutation } from 'redux/auth/authApi';
import { setUserCredentials } from 'redux/user/userSlice';

import {
  TextFieldAndErrorWrapper,
  AuthFormContainer,
  Title,
  ErrorText,
  StyledForm,
  StyledTextField,
  StyledButton,
  Error,
} from './AuthForm.styled';

const FormError = ({ name }) => {
  return <ErrorMessage name={name} render={message => <ErrorText>{message}</ErrorText>} />;
};

export const AuthForm = () => {
  const [signUp] = useUserSignUpMutation();
  const [signIn] = useUserSignInMutation();

  const [showError, setShowError] = useState(false);

  const dispatch = useDispatch();
  const location = useLocation().pathname;

  const mutationMethod = location === '/signup' ? signUp : signIn;

  const handleUserSignUp = async userData => {
    try {
      const userCreationResponse = await mutationMethod(userData);
      if (userCreationResponse?.data) {
        dispatch(setUserCredentials(userCreationResponse));
        return;
      }

      if (userCreationResponse?.error?.status === 400) {
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 3000);
      }

      if (userCreationResponse?.error?.status === 500) {
        throw userCreationResponse.error;
      }
    } catch (error) {
      console.log('Server error');
    }
  };

  const initialValues =
    location === '/signup'
      ? {
          name: '',
          email: '',
          password: '',
        }
      : {
          email: '',
          password: '',
        };

  const validationSchemaSelector = location === '/signup' ? signUpSchema : signInSchema;

  return (
    <AuthFormContainer>
      <Title>{location === '/signup' ? "Let's create your account" : "Let's login to start"}</Title>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchemaSelector}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          handleUserSignUp(values);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ handleSubmit, isValid, dirty, isSubmitting }) => (
          <StyledForm autoComplete="off" onSubmit={handleSubmit}>
            {location === '/signup' && (
              <>
                <TextFieldAndErrorWrapper>
                  <Field
                    as={StyledTextField}
                    type="text"
                    name="name"
                    label="Name"
                    variant="outlined"
                    placeholder="Name Surname"
                    required
                  />
                  <FormError name="name" />
                </TextFieldAndErrorWrapper>
              </>
            )}

            <TextFieldAndErrorWrapper>
              <Field
                as={StyledTextField}
                type="text"
                name="email"
                label="Email"
                variant="outlined"
                placeholder="example@mail.com"
                required
              />
              <FormError name="email" />
            </TextFieldAndErrorWrapper>

            <TextFieldAndErrorWrapper>
              <Field
                as={StyledTextField}
                type="password"
                name="password"
                label="Password"
                variant="outlined"
                placeholder="at least 8 chars, numbers and letters"
                required
              />
              <FormError name="password" />
            </TextFieldAndErrorWrapper>

            <StyledButton
              type="submit"
              variant="outlined"
              disabled={!dirty || !isValid || isSubmitting}
            >
              {location === '/signup' ? 'Sign Up' : 'Sign In'}
            </StyledButton>
          </StyledForm>
        )}
      </Formik>
      {showError && (
        <Error>
          {location === '/signup' ? 'User creation error' : 'Incorrect email or password'}
        </Error>
      )}
    </AuthFormContainer>
  );
};
