import { connect } from 'react-redux';
import { default as ContactForm } from './ContactForm';

import { createContact } from 'store/operations/contactsOperations';
import { getAllContacts, getIsLoading } from 'selectors/contactSelector';

const mapStateToProps = (state) => ({
  contacts: getAllContacts(state),
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCreate: (data) => dispatch(createContact(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
