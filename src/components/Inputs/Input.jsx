import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = ({ name, value, placeholder, type, onChange }) => {
  return (
    <InputLine
      type={type}
      name={name ? name : null}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

const InputLine = styled.input`
  position: relative;
  font-size: 14px;
  background: #ffffff;
  border-radius: 5px;
  line-height: 25px;
  height: 35px;
  width: 300px;
  padding: 0 10px;
  outline: none;
  border: 1px solid #cacaca;
  margin-bottom: 10px;
`;

Input.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
