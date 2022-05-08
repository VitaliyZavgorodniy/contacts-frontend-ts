const getItems = (state) => state.contacts.items;
const getIsFetchingContacts = (state) => state.contacts.isFetchingContacts;
const getIsFetchingCreate = (state) => state.contacts.isFetchingCreate;
const getIsFetchingRemove = (state) => state.contacts.isFetchingRemove;

const contactsSelectors = {
  getItems,
  getIsFetchingContacts,
  getIsFetchingCreate,
  getIsFetchingRemove,
};

export default contactsSelectors;
