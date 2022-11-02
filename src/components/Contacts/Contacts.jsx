import { useDispatch, useSelector } from 'react-redux';

import { getContacts, selectVisibleContacts, getFilter, getIsLoading, getDeleteId } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

import {
  ContactList,
  ContactItem,
  Contact,
  DeleteButton,
} from './Contacts.styled';

export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const deleteId = useSelector(getDeleteId);
  return (
    <ContactList>
      {selectVisibleContacts(contacts, filter).map(({ id, name, phone }) => (
        <ContactItem key={id}>
          <Contact>{name}</Contact>: <Contact>{phone}</Contact>
          <DeleteButton
            type="button"
            onClick={() => dispatch(deleteContact(id))}
            disabled={isLoading && deleteId === id}
          >
            {isLoading && deleteId === id ? 'Deleting' : 'Delete'}
          </DeleteButton>
        </ContactItem>
      ))}
    </ContactList>
  );
};
