import { useSelector } from 'react-redux';
import { getContacts, selectVisibleContacts, getFilter } from 'redux/selectors';
import { ContactsItem } from './ContactItem';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  return (
    <>
      <TableContainer component={Paper} sx={{ maxWidth: 900 }}>
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Number</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {selectVisibleContacts(contacts, filter).map(
              ({ id, name, number }, idx) => (
                <ContactsItem
                  id={id}
                  name={name}
                  number={number}
                  key={id}
                  idx={idx}
                />
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
