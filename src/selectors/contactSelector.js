export const getAllContacts = (state) => state.contacts;

export const getFilter = (state) => state.filter;

export const getFilteredContacts = (state) => {
  const contacts = getAllContacts(state);
  const filter = getFilter(state).toLowerCase();

  return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
};

export const getIsLoading = (state) => state.isLoading;

export const getContactsError = (state) => state.contactsError;
