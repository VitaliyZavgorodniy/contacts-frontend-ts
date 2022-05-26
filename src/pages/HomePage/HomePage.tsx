import styled from 'styled-components';

import Section from 'components/UI-kit/Containers/Section';
import Container from 'components/UI-kit/Containers/Container';

import ContactForm from 'components/ContactForm';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';

const HomePage = () => (
  <Section>
    <Container>
      <Block>
        <Side>
          <Filter />
          <ContactForm />
        </Side>

        <ContactsList />
      </Block>
    </Container>
  </Section>
);

const Block = styled.div`
  display: flex;
  padding: 20px 0;
`;

const Side = styled.div`
  margin-right: 20px;
`;

export default HomePage;
