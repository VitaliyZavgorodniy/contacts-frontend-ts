import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Box from '@mui/material/Box';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

import Section from 'components/UI-kit/Containers/Section';
import Container from 'components/UI-kit/Containers/Container';

import FormInput from 'components/UI-kit/Inputs/FormInput';
import PasswordInput from 'components/UI-kit/Inputs/PasswordInput';
import SubmitButton from 'components/UI-kit/Buttons/SubmitButton';

const SignUpPage = ({ isFetching, onSignup }) => {
  const [name, setUserName] = useState('');
  const [email, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    onSignup({ name, email, password });
  };

  return (
    <Section>
      <Container>
        <Form component="form" onSubmit={handleFormSubmit}>
          <Title>Register</Title>
          <Item>
            <FormInput
              name="Name"
              value={name}
              onChange={setUserName}
              placeholder="User Name"
            />
          </Item>
          <Item>
            <FormInput
              name="Email"
              value={email}
              onChange={setUserEmail}
              placeholder="user@mail.com"
              type="email"
            />
          </Item>
          <Item>
            <PasswordInput
              name="Password"
              value={password}
              onChange={setPassword}
              placeholder="Enter password"
            />
          </Item>
          <Item>
            <SubmitButton
              title="Create account"
              type="submit"
              isLoading={isFetching}
              icon={<AddBoxOutlinedIcon />}
            />
          </Item>

          <p>
            Already have account? <StyledLink to="/login">Log in</StyledLink>
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

const Item = styled.div`
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
  color: #1976d3;

  &:hover {
    cursor: pointer;
    color: #024b94;
  }
`;

export default SignUpPage;
