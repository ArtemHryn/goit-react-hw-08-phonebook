import { useSelector } from 'react-redux';

import { getContacts, selectVisibleContacts, getFilter } from 'redux/selectors';

import { ContactList } from './ContactsList.styled';
import { ContactsItem } from './ContactItem';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  return (
    <ContactList>
      {selectVisibleContacts(contacts, filter).map(({ id, name, number }) => (
        <ContactsItem id={id} name={name} number={number} key={id} />
      ))}
    </ContactList>
  );
};
