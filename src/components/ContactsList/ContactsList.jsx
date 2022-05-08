import { useEffect } from 'react';
import PropTypes from 'prop-types';

const ContactsList = ({ contacts, isFetching, onRemove, fetchContacts }) => {
  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  const renderList = (items) =>
    items.map(({ id, name, number }) => (
      <li key={id}>
        <span>
          {name} | {number}
        </span>
        <button onClick={() => onRemove(id)}>delete</button>
      </li>
    ));

  return (
    <div>
      {isFetching ? <div>isFetching</div> : null}
      <ul>{contacts?.length ? renderList(contacts) : 'No contacts'}</ul>
    </div>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  isFetching: PropTypes.bool,
  onRemove: PropTypes.func.isRequired,
  fetchContacts: PropTypes.func.isRequired,
};

export default ContactsList;
