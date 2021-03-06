import styled from 'styled-components';

const Container = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

export default Container;
