import { makeStyles} from '@mui/styles';
export default makeStyles((theme: any) => ({
btnIconPrimary: {
    color:theme.palette.mode === "dark"
    ? theme.palette.primary.main
    :theme.palette.text.secondary,
    borderRadius: '5px',
    padding: '8px',
  "&:hover" :{
    background: theme.palette.primary.main,
    borderRadius: '5px',
    color: theme.palette.background,
  },
},
  btnPrimaryRevere: {
    background:theme.palette.mode === "dark"
    ? theme.palette.primary.main
    :theme.palette.text.secondary,
    borderRadius: '5px',
    color: theme.palette.background,
  "&:hover" :{
    background: theme.palette.primary.main
  },
  editImage:{
   color:theme.palette.mode === "dark"
    ? theme.palette.primary.main
    :theme.palette.text.secondary,
    paddingLeft: `0 !important;` 
  },
  addUserImage:{
    color:theme.palette.mode === "dark"
  ? theme.palette.primary.main
  :theme.palette.text.secondary,
},
decriptionInput:{
    borderColor: `${theme.palette.primary.main} !important`,
},
underline: {
  '&:before': {
    borderBottom: '1px solid #red'
  },
  '&$error': {
    '&:after': {
      borderBottomColor: 'blue'
    }
  }
}
},
}));










