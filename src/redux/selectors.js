export const getContacts = state => state.contact.contacts;
export const getFilter = state => state.filter.filter;
export const getIsLoading =state => state.contact.isLoading
export const getDeleteId = state => state.contact.delete;
export const getError = state => state.contact.error;
export const getIsLogin = state => state.auth.isLoggedIn;
export const getEmail = state => state.auth.user.email;
export const getName = state => state.auth.user.name;



export const selectVisibleContacts = (contacts, filter) => {
  const filtered = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filtered)
  );
};
