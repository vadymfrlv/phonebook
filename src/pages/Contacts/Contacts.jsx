import { useSelector } from 'react-redux';

import { Box } from 'components/Box/Box';
import { Section } from 'components/Section';
import { AddContactForm } from 'components/AddContactForm';
import { ContactsList } from 'components/ContactsList';
import { ContactsCounter } from 'components/ContactsCounter';
import { Filter } from 'components/Filter';
import { Notification } from 'components/Notification';

import { useGetAllContactsQuery } from 'redux/contacts/contactsApi';

import { getFilter } from 'redux/filter/filterSelectors';

const ContactsPage = () => {
  const { data: contacts } = useGetAllContactsQuery('Contact', {
    refetchOnMountOrArgChange: true,
    skip: false,
  });

  const filter = useSelector(getFilter);

  let contactsToShow = contacts;
  let counterLabel = `All contacts: ${contactsToShow?.length}`;

  if (filter) {
    contactsToShow = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    if (contactsToShow.length === 1) {
      counterLabel = `${contactsToShow.length} contact found`;
    } else {
      counterLabel = `${contactsToShow.length} contacts found`;
    }
  }

  return (
    <Box
      minHeight="calc(100vh - 59px)"
      display="flex"
      alignItems="center"
      justifyContent="space-evenly"
    >
      <Section title="Add a contact">
        <AddContactForm />
      </Section>

      <Section title="Phonebook">
        {contacts?.length > 0 ? (
          <Box>
            <ContactsCounter label={counterLabel} />
            <Filter />
            {contactsToShow.length === 0 ? (
              <Notification message="Can't find this contact" />
            ) : (
              <ContactsList contacts={contactsToShow} />
            )}
          </Box>
        ) : (
          <Notification message="There are no contacts yet. Let's create a new one!" />
        )}
      </Section>
    </Box>
  );
};

export default ContactsPage;
