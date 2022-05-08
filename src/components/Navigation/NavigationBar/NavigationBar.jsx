import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavigationBar = () => (
  <Menu>
    <Item>
      <NavLink to="/login">Log In</NavLink>
    </Item>
    <Item>
      <NavLink to="/signup">Sign Up</NavLink>
    </Item>
  </Menu>
);

const Menu = styled.ul`
  display: flex;
`;

const Item = styled.li`
  padding: 5px;
`;

export default NavigationBar;
