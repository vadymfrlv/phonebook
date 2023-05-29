import { Formik, ErrorMessage } from 'formik';

import { contactSchema } from 'utils/schemas/contactValidation';
import { useGetAllContactsQuery, useAddContactMutation } from 'redux/contacts/contactsApi';

import {
  ErrorText,
  StyledForm,
  InputAndErrorWrapper,
  StyledLabel,
  StyledInput,
  StyledButton,
} from './AddContactForm.styled';

const FormError = ({ name }) => {
  return <ErrorMessage name={name} render={message => <ErrorText>{message}</ErrorText>} />;
};

export const AddContactForm = () => {
  const { data: contacts } = useGetAllContactsQuery();
  const [addContact, { isLoading: isAdding }] = useAddContactMutation();

  const handleAddContact = async values => {
    const { name, number } = values;
    const normalizedName = name.toLowerCase();
    const checkContactExistence = contacts.find(
      ({ name }) => name.toLowerCase() === normalizedName
    );

    if (checkContactExistence) {
      alert(`${name} is already in the phonebook`);
      return;
    }

    try {
      await addContact({ name, number });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={contactSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        handleAddContact(values);
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ handleSubmit, isValid, dirty, isSubmitting }) => (
        <StyledForm autoComplete="off" onSubmit={handleSubmit}>
          <InputAndErrorWrapper>
            <StyledLabel>
              Name
              <StyledInput name="name" type="text" placeholder="Dan Humphrey" />
            </StyledLabel>
            <FormError name="name" />
          </InputAndErrorWrapper>

          <InputAndErrorWrapper>
            <StyledLabel>
              Number
              <StyledInput name="number" type="text" placeholder="+357 96 855 814" />
            </StyledLabel>
            <FormError name="number" />
          </InputAndErrorWrapper>
          <StyledButton type="submit" disabled={!dirty || !isValid || isSubmitting}>
            {isAdding ? ' Adding...' : 'Add contact'}
          </StyledButton>
        </StyledForm>
      )}
    </Formik>
  );
};
