import {
  ContactItem,
  Contact,
  DeleteButton,
  EditButton,
  Input,
} from './ContactsList.styled';
import { deleteContact, editContact } from 'redux/operations';
import { useState } from 'react';
import { getIsLoading } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

export const ContactsItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const [deleteID, setDeleteId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [editName, setEditName] = useState('');
  const [editNumber, setEditNumber] = useState('');

  const onDeleteContact = id => {
    setDeleteId(id);
    dispatch(deleteContact(id));
  };
  const onEdit = ({ id, name, number }) => {
    setIsEdit(!isEdit);
    setEditName(name);
    setEditNumber(number);
    if (isEdit) {
      dispatch(
        editContact({ id, body: { name: editName, number: editNumber } })
      );
    }
  };
  const onChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setEditName(value);
      case 'number':
        return setEditNumber(value);
      default:
        return;
    }
  };
  return (
    <ContactItem>
      {isEdit ? (
        <>
          <Input type="text" value={editName} name="name" onChange={onChange} />
          <Input
            type="text"
            value={editNumber}
            name="number"
            onChange={onChange}
          />
        </>
      ) : (
        <>
          <Contact>{name}</Contact>: <Contact>{number}</Contact>
        </>
      )}

      <DeleteButton
        type="button"
        onClick={() => onDeleteContact(id)}
        disabled={isLoading && deleteID === id}
      >
        {isLoading && deleteID === id ? 'Deleting' : 'Delete'}
      </DeleteButton>
      <EditButton onClick={() => onEdit({ id, name, number })}>
        {isEdit ? 'Save' : 'Edit'}
      </EditButton>
    </ContactItem>
  );
};
