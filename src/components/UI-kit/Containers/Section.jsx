import styled from 'styled-components';

const Section = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.section`
  width: 100%;
  padding: 0 10px;
`;

export default Section;
