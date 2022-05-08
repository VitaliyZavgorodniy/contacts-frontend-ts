import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Box from '@mui/material/Box';
import LoginIcon from '@mui/icons-material/Login';

import Section from 'components/UI-kit/Containers/Section';
import Container from 'components/UI-kit/Containers/Container';

import FormInput from 'components/UI-kit/Inputs/FormInput';
import PasswordInput from 'components/UI-kit/Inputs/PasswordInput';
import SubmitButton from 'components/UI-kit/Buttons/SubmitButton';

import { showNotification } from 'utils/showNotification';

const LoginPage = ({ isFetching, onLogin }) => {
  const [email, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const normalizedEmail = email.trim();
    const normalizedPassword = password.trim();

    if (normalizedEmail.length < 3)
      return showNotification('Enter correct email');
    if (normalizedPassword.length < 5)
      return showNotification('Password needs to be more then 5 symbols');

    onLogin({ email, password });
  };

  return (
    <Section>
      <Container>
        <Form
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleFormSubmit}
        >
          <Title>Log In</Title>
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
            <SubmitButton
              title="Login"
              type="submit"
              isLoading={isFetching}
              icon={<LoginIcon />}
            />
          </Item>

          <p>
            Don't have account? <StyledLink to="/signup">Register</StyledLink>
          </p>
        </Form>
      </Container>
    </Section>
  );
};

const Form = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 100px auto 0px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Item = styled.div`
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledLink = styled(Link)`
  color: #1976d3;

  &:hover {
    cursor: pointer;
    color: #024b94;
  }
`;

export default LoginPage;
