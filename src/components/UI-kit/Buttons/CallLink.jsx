import styled from 'styled-components';

const CallLink = ({ children, tel }) => (
  <Link href={`tel:${tel}`}>{children}</Link>
);

const Link = styled.a`
  color: #1976d3;

  &:hover {
    cursor: pointer;
    color: #024b94;
  }
`;

export default CallLink;
