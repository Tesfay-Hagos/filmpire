import { makeStyles } from '@mui/styles';
import { yellow } from '@mui/material/colors';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
    BackgroundColor: yellow,
  },
  toolbar: {
    height: '70px',
  },
  content: {
    flexGrow: 1,
    padding: '2em',
  },
}));
