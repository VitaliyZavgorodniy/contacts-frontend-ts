import styled from 'styled-components';

import NavigationBar from './NavigationBar';
import NavigationUser from './NavigationUser';

const Navigation = ({ isLoggedIn }) => (
  <Wrapper>
    <Logo>
      <Icon />
      <Title>Contacts</Title>
    </Logo>

    {isLoggedIn ? <NavigationUser /> : <NavigationBar />}
  </Wrapper>
);

const Wrapper = styled.div`
display: flex;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: green;
`;

const Title = styled.h1``;

export default Navigation;
