import styled from 'styled-components';

import ContactForm from 'components/ContactForm';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';

const HomePage = () => (
  <Section>
    <Title>Phonebook</Title>
    <Filter />
    <ContactForm />
    <ContactsList />
  </Section>
);

const Section = styled.section`
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 10px;
`;

export default HomePage;
