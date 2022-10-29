import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { selectVisibleContacts } from 'redux/selectors';
import {
  ContactList,
  ContactItem,
  Contact,
  DeleteButton,
} from './Contacts.styled';

export const Contacts = () => {
  const contacts = useSelector(state => state.contact.contacts);
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

   const onDeleteContact = contactId => {
     dispatch(deleteContact(contactId));
  };
  
  return (
    <ContactList>
      {selectVisibleContacts(contacts, filter).map(({ id, name, number }) => (
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
