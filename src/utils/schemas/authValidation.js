import * as Yup from 'yup';

export const signInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .min(8, 'At least 8 characters')
    .matches(/^(?=.*[0-9])(?=.*[a-zA-Z])/, 'At least one letter and one number')
    .required('Password is required'),
});

export const signUpSchema = Yup.object()
  .shape({
    name: Yup.string()
      .min(3, 'Too short')
      .matches(/^[a-zA-Zа-яА-ЯҐґЄєІіЇї\s]*$/, 'Only letters, apostrophe and spaces')
      .required('Name is required'),
  })
  .concat(signInSchema);
