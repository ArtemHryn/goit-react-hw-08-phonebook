import {
  DeleteButton,
  EditButton,
  Input,
} from './ContactsList.styled';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import { deleteContact, editContact } from 'redux/operations';
import { useState } from 'react';
import { getIsLoading } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { VscSaveAs } from 'react-icons/vsc';

export const ContactsItem = ({ id, name, number, idx: index }) => {
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
    <>
      <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell align="right">{index + 1}</TableCell>
        {isEdit ? (
          <>
            <TableCell align="right">
              <Input
                type="text"
                value={editName}
                name="name"
                onChange={onChange}
              />
            </TableCell>
            <TableCell align="right">
              {' '}
              <Input
                type="text"
                value={editNumber}
                name="number"
                onChange={onChange}
              />
            </TableCell>
          </>
        ) : (
          <>
            <TableCell align="right">{name}</TableCell>
            <TableCell align="right">{number}</TableCell>
          </>
        )}

        <TableCell align="right">
          <DeleteButton
            type="button"
            onClick={() => onDeleteContact(id)}
            disabled={isLoading && deleteID === id}
          >
            {isLoading && deleteID === id ? 'Deleting' : 'Delete'}{' '}
            <AiOutlineDelete />
          </DeleteButton>
          <EditButton onClick={() => onEdit({ id, name, number })}>
            {isEdit ? (
              <>
                Save <VscSaveAs />
              </>
            ) : (
              <>
                Edit <AiOutlineEdit />
              </>
            )}
          </EditButton>
        </TableCell>
      </TableRow>
    </>
  );
};
