import styled from 'styled-components';

const NavigationUser = ({ user, onLogout }) => (
  <Wrapper>
    <span>{user.name}</span>
    <button onClick={onLogout}>Log out</button>
  </Wrapper>
);

const Wrapper = styled.div``;

export default NavigationUser;
