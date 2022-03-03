import React from 'react';
import "./SideBar.less";
import {Box,Typography,List, Divider,ListItem,ListItemIcon,ListItemText,Grid} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import smallIcon from '../../../../assets/images/smallicon.svg';
import SideMenu from "../SideMenu/SideMenu";
import Community from "src/pages/Community";
import history from "src/common/history";
import { Switch, Router } from 'react-router-dom';
import LoginUserImage from 'src/assets/images/LoginUserImage.svg';
import Project from "src/pages/Project";
import Settings from "src/pages/Settings";
import Toolbox from "src/pages/Toolbox";
import { useAppStateContext } from "src/contexts/SideBarContext";
import makeStyles from "./SidebatStyles";
import Support from "src/pages/Support";
import SignOut from "src/pages/Signout";
import { WorkFlowUpgrade } from "src/pages/Project/WorkFlowUpgrade/WorkFlowUpgrade";
import DeleteUser from "src/pages/Project/CreateProject/DeleteUser";
import { ProjectFlows } from "src/pages/Project/Projectflows/ProjectFlows";
import DeleteProject from "src/pages/Project/DeleteProject";
import FlowManager from "src/pages/FlowManager";
import PrivateRoute from "src/components/PrivateRoute";
import { ToolboxOutput } from "src/components/ToolBoxCard/ToolboxOutput/ToolboxOutput";

export const SideBar: React.VFC = () => {
  const [state] = useAppStateContext();
  const classes = makeStyles();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <div
        className={`sidebar ${state.open ? "sidebar-open" : "sidebar-closed"} ${
          classes.sideBar
        }`}
      >
        <div className={`drawer-header ${classes.drawerHeader}`}>
          <img src={smallIcon} alt="logo" className="main-icon" />
          <Typography color="primary">AIMIQ</Typography>
        </div>
        <Divider />
        <SideMenu />
        <Divider />
        <List>
          <ListItem>
            <ListItemIcon>
              <img src={LoginUserImage} />
            </ListItemIcon>
            <div className="sidebar-footer">
              <ListItemText>Simon Sack</ListItemText>
              <ListItemText color="primary">simon@gmail.com</ListItemText>
            </div>
          </ListItem>
        </List>
      </div>
      <Box component="main" sx={{ mt: 1 }}>
        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            <Router history={history}>
              <Switch>
                <PrivateRoute exact path="/app/project" component={Project} />
                <PrivateRoute exact path="/app/toolbox" component={Toolbox} />
                <PrivateRoute
                  exact
                  path="/app/flow-manager"
                  component={FlowManager}
                />
                <PrivateRoute
                  exact
                  path="/app/community"
                  component={Community}
                />
                <PrivateRoute exact path="/app/settings" component={Settings} />
                <PrivateRoute exact path="/app/support" component={Support} />
                <PrivateRoute exact path="/app/signout" component={SignOut} />
                <PrivateRoute
                  exact
                  path="/app/toolboxOutput"
                  component={ToolboxOutput}
                />
                <PrivateRoute
                  exact
                  path="/app/projectFlows"
                  component={ProjectFlows}
                />
                <PrivateRoute
                  exact
                  path="/app/delete-project"
                  component={DeleteProject}
                />
                <PrivateRoute
                  exact
                  path="/app/delete-user"
                  component={DeleteUser}
                />
                <PrivateRoute
                  exact
                  path="/app/workflow-upgrade"
                  component={WorkFlowUpgrade}
                />
              </Switch>
            </Router>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
