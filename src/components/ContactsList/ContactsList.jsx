import PropTypes from 'prop-types';

import { Contact } from './Contact';

import { StyledContactsList, StyledContactsListItem } from './ContactsList.styled';

export const ContactsList = ({ contacts }) => {
  return (
    <StyledContactsList>
      {contacts.map(({ id, name, number }) => (
        <StyledContactsListItem key={id}>
          <Contact id={id} name={name} number={number} />
        </StyledContactsListItem>
      ))}
    </StyledContactsList>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
