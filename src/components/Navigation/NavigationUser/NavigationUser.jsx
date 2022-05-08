import styled from 'styled-components';

import LightButton from 'components/UI-kit/Buttons/LightButton';

const NavigationUser = ({ user, onLogout }) => (
  <Wrapper>
    <Name>Hello, {user.name}!</Name>
    <LightButton onClick={onLogout} title="Log out" />
  </Wrapper>
);

const Wrapper = styled.div``;

const Name = styled.span`
  color: #fff;
  margin-right: 15px;
`;

export default NavigationUser;
