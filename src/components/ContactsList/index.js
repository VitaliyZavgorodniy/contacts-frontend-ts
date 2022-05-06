import { connect } from 'react-redux';
import { default as ContactsList } from './ContactsList';

import {
  fetchContacts,
  removeContact,
} from 'store/operations/contactsOperations';
import { getFilteredContacts, getIsLoading } from 'selectors/contactSelector';

const mapStateToProps = (state) => ({
  contacts: getFilteredContacts(state),
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  onRemove: (id) => dispatch(removeContact(id)),
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
