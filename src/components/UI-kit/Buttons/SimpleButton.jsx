import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Send';

const SimpleButton = ({ onClick, title, isLoading, icon, type }) => (
  <LoadingButton
    onClick={onClick}
    startIcon={icon ?? <SaveIcon />}
    loading={isLoading}
    type={type ?? null}
    loadingPosition="start"
    variant="outlined"
  >
    {title}
  </LoadingButton>
);

export default SimpleButton;
