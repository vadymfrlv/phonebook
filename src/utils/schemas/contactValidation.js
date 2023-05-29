import * as Yup from 'yup';

export const contactSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-ЯҐґЄєІіЇї\s]*$/, 'Only letters, apostrophe and spaces')
    .min(3, 'Too Short')
    .required('Name is required'),
  number: Yup.string()
    .matches(/^\+?\d[\d\s#-]*$/, 'Only digits, spaces, dashes, () and can start with +')
    .min(6, 'Invalid number')
    .required('Numder is required'),
});
