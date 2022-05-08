import PropTypes from 'prop-types';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';

import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const FormInput = ({
  onChange,
  name,
  value,
  autoComplete,
  placeholder,
  type,
}) => (
  <FormControl>
    <InputLabel htmlFor={name}>{name}</InputLabel>
    <OutlinedInput
      id={name}
      label={name}
      type={'text'}
      value={value}
      placeholder={placeholder}
      autoComplete={autoComplete}
      onChange={(e) => onChange(e.target.value)}
      endAdornment={
        <InputAdornment position="end">
          <IconButton aria-label="toggle password visibility" edge="end">
            {type === 'email' ? <EmailIcon /> : <AccountCircleIcon />}
          </IconButton>
        </InputAdornment>
      }
      margin="dense"
      required
    />
  </FormControl>
);

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default FormInput;
