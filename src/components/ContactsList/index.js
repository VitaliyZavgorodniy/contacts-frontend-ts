import { connect } from 'react-redux';
import { default as ContactsList } from './ContactsList';

import { filterSelectors } from 'store/filter';
import { contactsOperations, contactsSelectors } from 'store/contacts';

import { filterContacts } from 'utils/filterContacts';

const mapStateToProps = (state) => ({
  contacts: filterContacts(
    contactsSelectors.getItems(state),
    filterSelectors.getFilter(state)
  ),
  isFetching: contactsSelectors.getIsFetchingContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onRemove: (id) => dispatch(contactsOperations.remove(id)),
  fetchContacts: () => dispatch(contactsOperations.fetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
