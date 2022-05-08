import PropTypes from 'prop-types';
import styled from 'styled-components';

import SaveIcon from '@mui/icons-material/Save';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import Input from 'components/UI-kit/Inputs/Input';
import SimpleButton from 'components/UI-kit/Buttons/SimpleButton';

import useLocalStorage from 'hooks/useLocalStorage';

import { showNotification } from 'utils/showNotification';
import { comparedContact } from 'utils/compareContacts';

const ContactForm = ({ contacts, onCreate, isFetching }) => {
  const [name, setName] = useLocalStorage('name', '');
  const [number, setNumber] = useLocalStorage('phone', '');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim().length === 0) return showNotification('Enter valid name');
    if (number.length <= 10) return showNotification('Enter valid phone');

    if (comparedContact(contacts, 'number', number))
      return showNotification('This number is already taken');
    if (comparedContact(contacts, 'name', name))
      return showNotification('This name is already taken');

    onCreate({ name, number });

    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        title="Name"
        name="name"
        type="text"
        placeholder="Enter name"
        value={name}
        disabled={isFetching}
        onChange={(e) => setName(e.target.value)}
      />

      <PhoneInput
        value={number}
        onChange={(number) => setNumber(number)}
        country={'ua'}
        regions={'europe'}
        inputProps={{
          name: 'number',
          required: true,
          autoFocus: true,
          disabled: isFetching,
          style: { borderColor: '#1976d3' },
        }}
      />

      <ItemWrapper>
        <SimpleButton
          title="Add contact"
          type="submit"
          isLoading={isFetching}
          icon={<SaveIcon />}
        />
      </ItemWrapper>
    </Form>
  );
};

const Form = styled.form`
  width: 300px;
`;

const ItemWrapper = styled.div`
  margin-top: 15px;
`;

ContactForm.propTypes = {
  onCreate: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default ContactForm;
