import { useEffect } from 'react';
import PropTypes from 'prop-types';

const ContactsList = ({ contacts, isLoading, onRemove, fetchContacts }) => {
  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  const renderList = (items) =>
    items.map(({ id, name, phone }) => (
      <li key={id}>
        <span>
          {name} | {phone}
        </span>
        <button onClick={() => onRemove(id)}>delete</button>
      </li>
    ));

  return (
    <div>
      {isLoading ? <div>Loading</div> : null}
      <ul>{contacts.length ? renderList(contacts) : 'No contacts'}</ul>
    </div>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
  isLoading: PropTypes.bool,
  onRemove: PropTypes.func.isRequired,
};

export default ContactsList;
