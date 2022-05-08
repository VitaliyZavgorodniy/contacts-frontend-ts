import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavigationBar = () => (
  <Menu>
    <Item>
      <StyledLink to="/login">Log In</StyledLink>
    </Item>
    <Item>
      <StyledLink to="/signup">Sign Up</StyledLink>
    </Item>
  </Menu>
);

const Menu = styled.ul`
  display: flex;
`;

const Item = styled.li`
  padding: 5px;
`;

const StyledLink = styled(NavLink)`
  color: #fff;

  &:hover {
    cursor: pointer;
    color: #ddd;
  }
`;

export default NavigationBar;
