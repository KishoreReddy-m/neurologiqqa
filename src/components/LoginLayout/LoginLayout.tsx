import { useState } from "react";
import { Grid } from "@mui/material";
import "./LoginLayout.less";
import { Paper, Tabs, Tab, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MainIcon from "../../assets/images/MainIcon.svg";
import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import makeStyles from './LoginLayOutStyles';
import { getAppTheme } from "src/styles/theme";


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
export const LoginLayout: React.FC = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
 const classes = makeStyles();
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  return (
    <Grid className="main-grid">
      <Paper
        style={{
          padding: 2,
          margin: "auto",
          maxWidth: "74%",
          borderRadius: "4px",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className={classes.title}
          style={{ paddingTop: "26px" }}
        >
          <img src={MainIcon} alt="logo" className="main-icon" />
          <Typography
            style={{
              margin: "6px 3px 17px 6px",
              letterSpacing: "0px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
            color="primary"
          >
            AIMIQ
          </Typography>
        </Grid>
        <Divider variant="fullWidth" color="primary" />
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          className="tabs"
          aria-label="full width tabs example"
          TabIndicatorProps={{
            style: {
              display: "none",
            },
          }}
        >
          <Tab label={<span className="tab-text">LogIn</span>} />
          <Tab label={<span className="tab-text ">Sign-Up</span>} />
        </Tabs>
        <Divider variant="fullWidth" />
        <TabPanel value={value} index={0}>
          <Login />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <SignUp />
        </TabPanel>
      </Paper>
    </Grid>
  );
};
