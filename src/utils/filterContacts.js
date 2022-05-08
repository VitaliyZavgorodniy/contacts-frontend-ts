export const filterContacts = (contacts, filter) =>
  contacts.filter((contact) => contact.name.includes(filter));
