import { useState } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';

import FormInput from 'components/UI-kit/Inputs/FormInput';
import PasswordInput from 'components/UI-kit/Inputs/PasswordInput';
import SubmitButton from 'components/UI-kit/Buttons/SubmitButton';

import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'store/auth';

const SignUpPage = () => {
  const dispatch = useDispatch();

  const isLogged = useSelector(authSelectors.getLoggedIn);

  const [name, setUserName] = useState('');
  const [email, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch(authOperations.signUp({ name, email, password }));
  };

  const handleLogout = () => dispatch(authOperations.logOut());

  return (
    <Wrapper>
      {isLogged ? (
        <button onClick={handleLogout}>LogOut</button>
      ) : (
        <div>LogIn</div>
      )}

      <Form
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleFormSubmit}
      >
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
          <SubmitButton title="Sign up!" />
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

export default SignUpPage;
