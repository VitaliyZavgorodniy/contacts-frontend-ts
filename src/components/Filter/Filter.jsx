import PropTypes from 'prop-types';
import styled from 'styled-components';

const Filter = ({ value, onUpdate }) => (
  <Wrapper>
    <Title>Search</Title>
    <input onChange={(e) => onUpdate(e.target.value)} value={value} />
  </Wrapper>
);

const Wrapper = styled.div`
  width: 320px;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
`;

const Title = styled.h2`
  margin-top: 0;
`;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default Filter;
