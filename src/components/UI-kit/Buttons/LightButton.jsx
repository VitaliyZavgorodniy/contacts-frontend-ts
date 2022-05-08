import LoadingButton from '@mui/lab/LoadingButton';

const LightButton = ({ onClick, title, isLoading }) => (
  <LoadingButton
    onClick={onClick}
    loading={isLoading}
    loadingPosition="center"
    style={{ color: '#fff', borderColor: '#fff' }}
    variant="outlined"
  >
    {title}
  </LoadingButton>
);

export default LightButton;
