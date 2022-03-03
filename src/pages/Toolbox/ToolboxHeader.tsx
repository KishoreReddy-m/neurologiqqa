import { TextField, InputBase, Grid,IconButton } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { makeStyles} from '@mui/styles';
import StarImage from 'src/assets/images/StarImage.svg';
import SearchImage from 'src/assets/images/SearchImage.svg';
import React, { useState } from "react";
import { ThemeContext } from "@emotion/react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: '20px',
  backgroundColor:theme.palette.mode === "dark"
  ? theme.palette.primary.main
  :theme.palette.text.secondary,
  "&:hover": {
    backgroundColor: theme.palette.mode === "dark"
  ? theme.palette.primary.main
  :theme.palette.text.secondary,
  },
  marginLeft: 0,
  width: "100%",
  height:'30px'
}));
const useStyles = makeStyles((theme: any) => ({
   starBorder:{
     borderRight:`1px solid ${theme.palette.divider}`,
   minHeight: '80px',
   paddingRight: '25px',
   marginRight: '12px'
   }
}));
 
const SearchIconWrapper = styled("div")(({ theme }) => ({
  // color: theme.palette.mode === "dark"
  // ? theme.palette.divider
  // :theme.palette.divider,
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  // color: theme.palette.divider,
  "& .MuiInputBase-input": {
    padding: theme.spacing(0, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    
  },
}));
const ToolBoxHeader: React.VFC = () => {
  const [searchItem, setSearchItem] = useState("");
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
    <div className="header-navigation-wrap">
      <div className="header-l">
        <Grid item xs={4}>
        <TextField
            required
            label={<span className="form-label">Show all AI tools</span>}
            variant="standard"
             style={{width:'250px'}}
            fullWidth
            select
          />
        </Grid>
      </div>
      <div className="header-r">
        <Grid
          className={classes.starBorder}
          
          item
          xs={4}
          style={{ display: "flex" }}
        >
             <Search>
             <SearchIconWrapper>
            <img src={SearchImage}/>
             </SearchIconWrapper>
            <StyledInputBase
              placeholder="type to search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Grid>
        <Grid>
          <IconButton size="large" edge="end" color="primary">
            <img src={StarImage} />
          </IconButton>
        </Grid>
      </div>
    </div>
  </Grid>
  );
};
export default ToolBoxHeader;
