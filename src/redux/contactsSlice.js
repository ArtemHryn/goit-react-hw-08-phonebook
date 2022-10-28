import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'contacts',
  storage,
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {contacts: []},
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(el => el.id === action.payload.id);
      state.contacts.splice(index, 1);
    },
  },
});


export const contactsReducer = persistReducer(persistConfig, contactSlice.reducer);

export const { addContact, deleteContact } = contactSlice.actions;
