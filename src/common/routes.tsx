import SmsIcon from "@mui/icons-material/Sms";
import AppsIcon from "@mui/icons-material/Apps";
import HelpIcon from "@mui/icons-material/Help";
import PeopleIcon from "@mui/icons-material/People";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Project from "../pages/Project";
import Toolbox from "../pages/Toolbox";
import Support from "../pages/Support";
import Community from "../pages/Community";
import Settings from "../pages/Settings";
import Signout from "../pages/Signout";
import React from "react";
import ProjectFlows from "src/pages/Project/Projectflows";

const routes = [
  {
    type: "collapse",
    name: "Project",
    key: "project",
    icon: <SmsIcon />,
    route: "/app/project",
    component: <Project />,
  },
  {
    type: "collapse",
    name: "All Toolbox",
    key: "toolbox",
    icon: <AppsIcon />,
    route: "/app/toolbox",
    component: <Toolbox />,
  },
  { type: "title", name: "HELP" },
  {
    type: "collapse",
    name: "Support",
    key: "support",
    icon: <HelpIcon />,
    route: "/app/support",
    component: <Support />,
  },
  {
    type: "collapse",
    name: "Community",
    key: "community",
    icon: <PeopleIcon />,
    route: "/app/community",
    component: <Community />,
  },
  { type: "title", name: "ACCOUNT" },
  {
    type: "collapse",
    name: "Settings",
    key: "settings",
    icon: <ManageAccountsIcon />,
    route: "/app/settings",
    component: <Settings />,
  },
  {
    type: "collapse",
    name: "Sign Out",
    key: "signout",
    icon: <ExitToAppIcon />,
    route: "/app/signout",
    component: <Signout />,
  },
  
];

export default routes;
