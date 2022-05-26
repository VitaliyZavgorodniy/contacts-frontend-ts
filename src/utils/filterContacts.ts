import { Contact } from 'interfaces/Contact';
import { FilterType } from 'types/FilterType';

export const filterContacts = (contacts: Contact[], filter: FilterType) =>
  contacts.filter((contact) => contact.name.includes(filter));
