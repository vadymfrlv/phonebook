import PropTypes from 'prop-types';
import { StyledContactsCounter } from './ContactsCounter.styled';

export const ContactsCounter = ({ label }) => {
  return <StyledContactsCounter>{label}</StyledContactsCounter>;
};

ContactsCounter.propTypes = {
  label: PropTypes.string.isRequired,
};
