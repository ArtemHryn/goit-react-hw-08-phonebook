// import { nanoid } from 'nanoid';
import GlobalStyle from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsFilter } from './ContactsFilter/ContactsFilter';
import { Contacts } from './Contacts/Contacts';
import { Title, ContactTitle, Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <div>
        <Title>Phonebook</Title>
        <ContactForm />
        <ContactTitle>Contacts</ContactTitle>
        <ContactsFilter/>
        <Contacts/>
      </div>
    </Container>
  );
};

