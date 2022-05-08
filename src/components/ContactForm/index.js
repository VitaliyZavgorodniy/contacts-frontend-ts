import { connect } from 'react-redux';
import { default as ContactForm } from './ContactForm';

import { contactsOperations, contactsSelectors } from 'store/contacts';

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getItems(state),
  isFetching: contactsSelectors.getIsFetchingCreate(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCreate: (contact) => dispatch(contactsOperations.create(contact)),
  fetchContacts: () => dispatch(contactsOperations.fetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
