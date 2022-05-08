import styled from 'styled-components';

import Container from 'components/UI-kit/Containers/Container';

import NavigationBar from './NavigationBar';
import NavigationUser from './NavigationUser';

const Navigation = ({ isLoggedIn }) => (
  <Wrapper>
    <Container>
      <StyledNav>
        <Title>Contacts</Title>

        {isLoggedIn ? <NavigationUser /> : <NavigationBar />}
      </StyledNav>
    </Container>
  </Wrapper>
);

const Wrapper = styled.header`
  width: 100%;
  padding: 0 10px;
  background-color: #1976d3;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 24px;
  font-family: 'Comfortaa';
`;

export default Navigation;
