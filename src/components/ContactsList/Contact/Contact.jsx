import PropTypes from 'prop-types';

import { useDeleteContactMutation } from 'redux/contacts/contactsApi';

import { StyledContact, DeleteContactBtn } from './Contact.styled';

export const Contact = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <>
      <StyledContact>
        {name}&emsp;
        {number}
      </StyledContact>
      <DeleteContactBtn type="button" onClick={() => deleteContact(id)}>
        {isDeleting ? 'Deleting...' : 'Delete'}
      </DeleteContactBtn>
    </>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
