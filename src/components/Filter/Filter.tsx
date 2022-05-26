import PropTypes from 'prop-types';
import styled from 'styled-components';

import Input from 'components/UI-kit/Inputs/Input';
import { FilterType } from 'types/FilterType';

interface Props {
  value: FilterType;
  onUpdate: Function;
}

const Filter = ({ value, onUpdate }: Props) => (
  <Wrapper>
    <Title>Search</Title>
    <Input onChange={(e) => onUpdate(e.target.value)} value={value} />
  </Wrapper>
);

const Wrapper = styled.div`
  width: 300px;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #1976d3;
  border-radius: 5px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #fff;
`;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default Filter;
