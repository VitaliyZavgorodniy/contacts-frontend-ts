import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Navigation from 'components/Navigation';

const MainLayout = () => (
  <Wrapper>
    <Navigation />
    <Outlet />
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
`;

export default MainLayout;
