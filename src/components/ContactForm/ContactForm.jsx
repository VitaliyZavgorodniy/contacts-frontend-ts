import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import Input from 'components/Inputs/Input';

import useLocalStorage from 'hooks/useLocalStorage';

// import { comparedContact } from 'utils/compareContacts';

const ContactForm = ({ onCreate, isFetching }) => {
  const [name, setName] = useLocalStorage('name', '');
  const [number, setNumber] = useLocalStorage('phone', '');
  const [error, setError] = useState('');

  useEffect(() => {
    setError('');
  }, [name, number]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (name.length === 0) return setError('Enter valid name');
    // if (phone.length !== 12) return setError('Enter valid phone');
    // if (comparedContact(contacts, 'phone', number))
    //   return setError('This number is already taken');
    // if (comparedContact(contacts, 'name', name))
    //   return setError('This name is already taken');

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
        }}
      />

      <ErrorInfo>{error}</ErrorInfo>

      <SubmitBtn type="submit">Add contact</SubmitBtn>
    </Form>
  );
};

const Form = styled.form`
  width: 320px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
`;

const SubmitBtn = styled.button`
  margin-top: 10px;
`;

const ErrorInfo = styled.p`
  color: red;
`;

ContactForm.propTypes = {
  onCreate: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default ContactForm;
