import { useState } from "react";
import { Grid } from "@mui/material";
import "./ForgotPassword.less";
import { Paper, Tabs, Tab, Divider, Button, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useForm, Controller } from "react-hook-form";
import MainIcon from "../../../assets/images/MainIcon.svg";
import ConfirmPasswordForm from "./password";
import React from "react";
import Login from "../Login";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
interface Props {
  email: string;
}
export const ForgotPassword: React.FC = () => {
  const { handleSubmit, control, formState } = useForm<Props>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    shouldUnregister: false,
  });

  const onSubmit = (data: Props) => console.log("data", data);
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
          maxWidth: "45%",
          borderRadius: "4px",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{ paddingTop: "26px" }}
        >
          <img src={MainIcon} className="main-icon" />
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
          className="tabs"
          variant="fullWidth"
          aria-label="full width tabs example"
          TabIndicatorProps={{
            style: {
              display: "none",
            },
          }}
        >
          <Tab label={<span className="tab-text">Reset Your Password</span>} />
        </Tabs>
        <Divider variant="fullWidth" />
        <TabPanel value={value} index={0}>
          <Typography style={{ textAlign: "center" }}>
            Please enter your email address below and we will send you a link
            with further instructions.
          </Typography>
          <ConfirmPasswordForm />
        </TabPanel>
      </Paper>
    </Grid>
  );
};
