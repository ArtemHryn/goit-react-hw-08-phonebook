import PropTypes from 'prop-types';
import {
  ContactList,
  ContactItem,
  Contact,
  DeleteButton,
} from './Contacts.styled';

export const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <ContactList>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <Contact>{name}</Contact>: <Contact>{number}</Contact>
          <DeleteButton type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </DeleteButton>
        </ContactItem>
      ))}
    </ContactList>
  );
};


Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};