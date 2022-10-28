import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from 'redux/contactsSlice';
import{changeFilter} from 'redux/filterSlice'
import GlobalStyle from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsFilter } from './ContactsFilter/ContactsFilter';
import { Contacts } from './Contacts/Contacts';
import { Title, ContactTitle, Container } from './App.styled';

export const App = () => {
  const contacts = useSelector(state => state.contact.contacts);
  const filter = useSelector(state => state.filter.filter)
  const dispatch = useDispatch()

  const onFormSubmit = ({ name, number }) => {
    const checkContactName = contacts.some(contact => contact.name === name);
    if (checkContactName) {
      Notiflix.Report.warning(`${name} is Already in contacts`);
      return;
    }
    const contact = { id: nanoid(3), name, number };
    dispatch(addContact(contact))
  };
  const onFilter = e => {
    // setFilter(e.target.value);
    dispatch(changeFilter(e.target.value));
  };

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId))
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

