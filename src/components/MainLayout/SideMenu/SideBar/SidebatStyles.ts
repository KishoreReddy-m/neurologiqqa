
import { ThemeContext } from '@emotion/react';
import { makeStyles} from '@mui/styles';


export default makeStyles((theme: any) => ({
  sideBar: {
        backgroundColor:theme.palette.background.paper,
      },
      drawerHeader:{
        background:theme.palette.mode === 'light'?theme.palette.text.secondary:'none'
      }
}));