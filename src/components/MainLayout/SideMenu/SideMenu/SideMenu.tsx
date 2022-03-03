import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles } from "@mui/styles";
import "./SideMenu.less";
import React from "react";
import routes from "src/common/routes";
import { List, ListItemButton, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";

export interface Props {
  name?: React.ReactNode;
  icon?: string | React.ReactNode;
}
const useStyles = makeStyles((theme: any) => ({
  root: {
    "&:focus": {
      color: theme.palette.mode ==='dark'?theme.palette.primary.main:theme.palette.text.secondary,
      "& .MuiListItemIcon-root ,": {
        color: theme.palette.mode ==='dark'?theme.palette.primary.main:theme.palette.text.secondary
      },
    },
  },
  selected: {},
}));
export const SideMenu: React.VFC<Props> = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <List>
        {routes.map((item, i) =>
          item.type === "title" ? (
            <Typography
              key={i}
              pl={3}
              mt={4}
              mb={1}
              ml={-2}
              color="secondary.main"
              style={{ fontSize: "14px" }}
            >
              {item.name}
            </Typography>
          ) : (
            <ListItemButton
            className={classes.root}
              onClick={() => history.push(`${item.route}`)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          )
        )}
      </List>
    </>
  );
};
export default SideMenu;
