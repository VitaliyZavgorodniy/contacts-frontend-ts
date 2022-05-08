import { connect } from 'react-redux';
import { default as ContactsList } from './ContactsList';

import { contactsOperations, contactsSelectors } from 'store/contacts';

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getItems(state),
  isFetching: contactsSelectors.getIsFetchingContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onRemove: (id) => dispatch(contactsOperations.remove(id)),
  fetchContacts: () => dispatch(contactsOperations.fetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
