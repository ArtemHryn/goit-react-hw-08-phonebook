import { useDispatch, useSelector } from 'react-redux';

import { getContacts, selectVisibleContacts, getFilter, getIsLoading } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

import {
  ContactList,
  ContactItem,
  Contact,
  DeleteButton,
} from './Contacts.styled';
import { useState } from 'react';

export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const [deleteID, setDeleteId] = useState(null)

  const onDeleteContact = (id) => {
    setDeleteId(id)
    dispatch(deleteContact(id));
  }
  return (
    <ContactList>
      {selectVisibleContacts(contacts, filter).map(({ id, name, phone }) => (
        <ContactItem key={id}>
          <Contact>{name}</Contact>: <Contact>{phone}</Contact>
          <DeleteButton
            type="button"
            onClick={() => onDeleteContact(id)}
            disabled={isLoading && deleteID === id}
          >
            {isLoading && deleteID === id ? 'Deleting' : 'Delete'}
          </DeleteButton>
        </ContactItem>
      ))}
    </ContactList>
  );
};
