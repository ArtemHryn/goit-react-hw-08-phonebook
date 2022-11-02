import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const onPending = state => {
  state.isLoading = true;
};

const onReject = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], isLoading: false, error: null },
  extraReducers: {
    [fetchContacts.pending]: onPending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected]: onReject,
    [addContact.pending]: onPending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(action.payload);
    },
    [addContact.rejected]: onReject,
    [deleteContact.pending]: onPending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.contacts.findIndex(el => el.id === action.payload.id);
      state.contacts.splice(index, 1);
    },
    [deleteContact.rejected]: onReject,
  },
});

export const contactsReducer = contactSlice.reducer;
