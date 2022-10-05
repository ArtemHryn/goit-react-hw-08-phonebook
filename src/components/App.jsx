import { nanoid } from 'nanoid';
import { Component } from 'react';
import Notiflix from 'notiflix';
import GlobalStyle from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { ContactsFilter } from './ContactsFilter/ContactsFilter';
import { Title, ContactTitle, Container } from './App.styled';

const CONTACTS = 'contacts';

export class App extends Component {
  state = {
    contacts: [
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem(CONTACTS));
    if (contacts) {
      this.setState({ contacts });
    }
}

  componentDidUpdate(prevProp, prevState) {
    console.log('2');
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;
    if (nextContacts !== prevContacts) {
      console.log('1');
      localStorage.setItem(CONTACTS, JSON.stringify(nextContacts));
    }
  }
  
  onFormSubmit = ({ name, number }) => {
    const checkContactName = this.state.contacts.some(
      contact => contact.name === name
    );
    if (checkContactName) {
      Notiflix.Report.warning(`${name} is Already in contacts`);
      return;
    }

    const contact = { id: nanoid(3), name, number };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  onFilter = e => {
    this.setState({ filter: e.target.value });
  };
  onDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  onVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const filtered = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtered)
    );
  };

  render() {
    return (
      <Container>
        <GlobalStyle />
        <div>
          <Title>Phonebook</Title>
          <ContactForm
            name={this.state.name}
            number={this.state.number}
            onAddTask={this.onFormSubmit}
          />

          <ContactTitle>Contacts</ContactTitle>
          <ContactsFilter value={this.state.filter} onChange={this.onFilter} />
          <Contacts
            contacts={this.onVisibleContacts()}
            onDeleteContact={this.onDeleteContact}
          />
        </div>
      </Container>
    );
  }
}
