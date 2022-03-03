import React from "react";
import { AppBar, Toolbar, IconButton, Box, CssBaseline } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import Divider from "@mui/material/Divider";
import { useAppStateContext } from "src/contexts/SideBarContext";
import makeStyles from './HeaderStyles';
interface Props {
  header?: React.ReactNode;
}

export const HeaderComponent: React.VFC<Props> = ({ header }) => {
  const classes=makeStyles();
  const [{ open }, dispatch] = useAppStateContext();
  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed" className={classes.header} >
        <Toolbar>
          <Box>
            <IconButton
              color="primary"
              onClick={() => {
                dispatch({
                  type: "SET_SIDEBAR_STATUS",
                  payload: { open: !open },
                });
              }}
              edge="start"
            >
              {open ? <ChevronLeft /> : <ChevronRight />}
            </IconButton>
          </Box>
          <Divider
            orientation="vertical"
            flexItem
            style={{ marginRight: "11px" }}
          />
          {header && header}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};
export default HeaderComponent;
