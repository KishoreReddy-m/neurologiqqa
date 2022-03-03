import { makeStyles } from "@mui/styles";


export default makeStyles((theme: any) => ({ 
    title:{
        background:theme.palette.mode === "dark"
        ? 'none'
        : theme.palette.text.secondary
    }
  }));