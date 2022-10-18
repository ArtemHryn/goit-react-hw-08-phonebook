import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import GlobalStyle from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { ContactsFilter } from './ContactsFilter/ContactsFilter';
import { Title, ContactTitle, Container } from './App.styled';
import { useState, useEffect } from 'react';

const CONTACTS = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem(CONTACTS)) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(CONTACTS, JSON.stringify(contacts));
  }, [contacts]);

  const onFormSubmit = ({ name, number }) => {
    const checkContactName = contacts.some(contact => contact.name === name);
    if (checkContactName) {
      Notiflix.Report.warning(`${name} is Already in contacts`);
      return;
    }
    const contact = { id: nanoid(3), name, number };
    setContacts(state => [contact, ...state]);
  };
  const onFilter = e => {
    setFilter(e.target.value);
  };

  const onDeleteContact = contactId => {
    setContacts(state => state.filter(contact => contact.id !== contactId));
  };

  const onVisibleContacts = () => {
    const filtered = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtered)
    );
  };

  return (
    <Container>
      <GlobalStyle />
      <div>
        <Title>Phonebook</Title>
        <ContactForm onAddTask={onFormSubmit} />

        <ContactTitle>Contacts</ContactTitle>
        <ContactsFilter value={filter} onChange={onFilter} />
        <Contacts
          contacts={onVisibleContacts()}
          onDeleteContact={onDeleteContact}
        />
      </div>
    </Container>
  );
};

