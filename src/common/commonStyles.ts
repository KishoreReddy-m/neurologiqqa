import { makeStyles } from '@mui/styles';


export default makeStyles((theme: any) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    }
  },
  label: {
    '&$focused': {
      color: theme.palette.secondary.main
    },
  },
  forgotPassword:{
    color:theme.palette.text.primary
  },
  formLabel: {
    fontSize: '14px',
    fontFamily: 'sans-serif',
    letterSpacing: '0px',
  },
  focused: {},
}));