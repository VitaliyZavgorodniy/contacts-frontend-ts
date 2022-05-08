import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Skeleton from '@mui/material/Skeleton';

import CallLink from 'components/UI-kit/Buttons/CallLink';

const ContactsList = ({ contacts, isFetching, onRemove, fetchContacts }) => {
  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  const renderList = (items) =>
    items.map(({ id, name, number }) => (
      <Item key={id}>
        <Text>
          <Title>{name}</Title>
          <CallLink tel={number}>+{number}</CallLink>
        </Text>
        <IconButton
          onClick={() => onRemove(id)}
          style={{ padding: 5 }}
          aria-label="delete"
        >
          <DeleteIcon />
        </IconButton>
      </Item>
    ));

  const renderSkeleton = () =>
    Array.from(new Array(6)).map((item, index) => (
      <Item key={index}>
        <Skeleton variant="rectangular" width={260} height={38} />
      </Item>
    ));

  if (isFetching) return <List>{renderSkeleton()}</List>;

  return <List>{contacts?.length ? renderList(contacts) : 'No contacts'}</List>;
};

const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 280px;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #dfdfde;
  border-radius: 5px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Text = styled.div`
  margin-right: 20px;
`;

const Title = styled.h3`
  margin-bottom: 5px;
`;

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
