import { useState } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';

import FormInput from 'components/UI-kit/Inputs/FormInput';
import PasswordInput from 'components/UI-kit/Inputs/PasswordInput';
import SubmitButton from 'components/UI-kit/Buttons/SubmitButton';

// goitvitaliy@mail.com
// qwerty12345

const LoginPage = ({ isFetching, onLogin }) => {
  const [email, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleFormSubmit = (e) => {
    e.preventDefault();

    onLogin({ email, password });
  };

  return (
    <Wrapper>
      <Form
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleFormSubmit}
      >
        <Item>
          <FormInput
            name="Email"
            value={email}
            onChange={setUserEmail}
            placeholder="user@mail.com"
            type="email"
            autoComplete="username"
            disabled={isFetching}
          />
        </Item>
        <Item>
          <PasswordInput
            name="Password"
            value={password}
            onChange={setPassword}
            placeholder="Enter password"
            disabled={isFetching}
          />
        </Item>
        <Item>
          <SubmitButton title="Login" disabled={isFetching} />
        </Item>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
`;

const Form = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 100px auto 0;
`;

const Item = styled.div`
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export default LoginPage;
