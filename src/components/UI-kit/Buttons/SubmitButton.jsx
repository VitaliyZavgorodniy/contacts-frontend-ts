import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';

const SubmitButton = ({ onClick, title, isLoading, icon, type }) => (
  <LoadingButton
    onClick={onClick}
    endIcon={icon ?? <SendIcon />}
    loading={isLoading}
    type={type ?? null}
    loadingPosition="end"
    variant="contained"
  >
    {title}
  </LoadingButton>
);

export default SubmitButton;
