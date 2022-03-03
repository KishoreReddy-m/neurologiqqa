import React, { useContext, useState } from "react";
import { PageLayout } from "src/components/PageLayout/PageLayout";
import "./Settings.less";
import Avatar from "@mui/material/Avatar";
import {
  Button,
  Grid,
  TextField,
  Box,
  Typography,
  Paper,
  Container,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Switch,
  Divider,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import makeStyles from "../../common/commonStyles";
import { LIGHT_MODE_THEME, DARK_MODE_THEME } from "../../utils/constants";
import SettingsHeader from "./SettingsHeader";
import {
  EMAIL_REQUIRED,
  ENTER_VALID_EMAIL_ADDRESS,
  PASSWORD_REQUIRED,
  ENTER_VALID_PASSWORD,
} from "../../common/constants";
import useGetCurrentUserQuery from "src/hooks/queries/useGetCurrentUserQuery";
import CompanyForm from "./CompanyForm";
import useUploadUserAvatarMutation from "src/hooks/mutations/useUploadUserAvatarMutation";
import useUpdateUserInformationMutation from "src/hooks/mutations/useUpdateUserInformationMutation";
import { BaseInformation } from "src/interface/User";
import ThemeModeContext from "src/contexts";

export const Settings: React.VFC = () => {
  let [showError, setError] = useState(false);
  const { data: user, isLoading } = useGetCurrentUserQuery();
  const uploadUserAvatarMutation = useUploadUserAvatarMutation();
  const updateUserInformationMutation = useUpdateUserInformationMutation();
  const classes = makeStyles();
  const { handleSubmit, control, watch } = useForm<BaseInformation>({
    mode: "onChange",
    shouldUnregister: false,
  });
  const password = watch("password");
  const onSubmit = (data: BaseInformation) => {
    updateUserInformationMutation.mutate(data);
  };
  const [mode, setMode] = useState(false);
  const { toggleThemeMode } = useContext(ThemeModeContext);
  const handleThemeChange = () => {
    setMode(!mode);
    toggleThemeMode();
  };
  const handleProfileImage = (event: any) => {
    let fileData = event.target.files[0];
    const fileType = event.target.files[0].type;

    if (
      fileType === "image/jpeg" ||
      fileType === "image/jpg" ||
      fileType === "image/png"
    ) {
      uploadUserAvatarMutation.mutate(fileData);
    }
  };
  return (
    <PageLayout header={<SettingsHeader />}>
      {user && (
        <Grid container spacing={2} sx={{ height: "90vh", overflow: "none" }}>
          <Paper sx={{ margin: "27px 0px 0px 16px" }}>
            <Container>
              <div className="avatar-icon-wrapper">
                <Typography style={{ fontSize: "20px" }}>
                  Personal Data
                </Typography>
                <div className="avatarblock">
                  {!user.avatar ? (
                    <>
                      <div className="upload-file-column">
                        <div className="input-type-file">
                          <input type="file" onChange={handleProfileImage} />
                          <div>
                            <span>+</span>
                            <span>Upload</span>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Avatar
                      alt="Remy Sharp"
                      src="../../../public/1.jpg"
                      sx={{ width: 150, height: 150 }}
                    />
                  )}
                </div>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                autoComplete="off"
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Controller
                      name="first_name"
                      control={control}
                      defaultValue={user?.base_information.first_name}
                      render={({
                        field: { onChange, value },
                        fieldState: { error },
                      }) => (
                        <TextField
                          required
                          label={<span className="form-label">FIRSTNAME</span>}
                          variant="standard"
                          value={value}
                          InputLabelProps={{
                            classes: {
                              root: classes.label,
                              focused: classes.focused,
                            },
                          }}
                          onChange={onChange}
                          error={!!error}
                          helperText={error ? error.message : null}
                          type="text"
                        />
                      )}
                      rules={{
                        required: "First Name is required",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Controller
                      name="last_name"
                      control={control}
                      defaultValue={user?.base_information.last_name}
                      render={({
                        field: { onChange, value },
                        fieldState: { error },
                      }) => (
                        <TextField
                          required
                          label={<span className="form-label">{value}</span>}
                          variant="standard"
                          value={value}
                          InputLabelProps={{
                            classes: {
                              root: classes.label,
                              focused: classes.focused,
                            },
                          }}
                          onChange={onChange}
                          fullWidth
                          error={!!error}
                          helperText={error ? error.message : null}
                          type="text"
                        />
                      )}
                      rules={{
                        required: "Last Name is required",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Controller
                      name="gender"
                      control={control}
                      defaultValue={0}
                      render={({ field: { onChange, value } }) => (
                        <FormControl variant="standard" fullWidth>
                          <InputLabel id="demo-simple-select-standard-label">
                            Gender
                          </InputLabel>
                          <Select
                            value={value}
                            onChange={() => {}}
                            label="Gender"
                          >
                            <MenuItem value={0}>Male</MenuItem>
                            <MenuItem value={1}>Female</MenuItem>
                            <MenuItem value={2}>Others</MenuItem>
                          </Select>
                        </FormControl>
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Controller
                      name="mail"
                      control={control}
                      defaultValue={user?.base_information.mail}
                      render={({
                        field: { onChange, value },
                        fieldState: { error },
                      }) => (
                        <TextField
                          required
                          label={<span className="form-label">E-MAIL</span>}
                          variant="standard"
                          value={value}
                          InputLabelProps={{
                            classes: {
                              root: classes.label,
                              focused: classes.focused,
                            },
                          }}
                          onChange={onChange}
                          fullWidth
                          error={!!error}
                          helperText={error ? error.message : null}
                          type="email"
                        />
                      )}
                      rules={{
                        required: EMAIL_REQUIRED,
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: ENTER_VALID_EMAIL_ADDRESS,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Link
                      to="/forgot-password"
                      style={{ color: "#eee", float: "right" }}
                    >
                      <span className="wrong-password">Forgot password</span>
                    </Link>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Button
                      variant="contained"
                      style={{ float: "right", width: "230px" }}
                      color="primary"
                      type="submit"
                      className="button"
                    >
                      <span className="button-text">Update details</span>
                    </Button>
                  </Grid>
                </Grid>
              </form>
              <Grid container spacing={2}>
                <CompanyForm />
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label={<span className="form-label">Package</span>}
                    variant="standard"
                    InputLabelProps={{
                      classes: {
                        root: classes.label,
                        focused: classes.focused,
                      },
                    }}
                    fullWidth
                    type="package"
                  />
                </Grid>
                <Grid item style={{ padding: "34px" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className="button"
                  >
                    <span className="button-text">Adjust</span>
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormGroup>
                    <label>Deception</label>
                    <FormControlLabel
                      control={
                        <Switch checked={mode} onChange={handleThemeChange} />
                      }
                      label="DarkMode"
                    />
                  </FormGroup>
                </Grid>
              </Grid>
              <Divider />
              <Box mt={3}>
                <Link to="/forgot-password" style={{ color: "#eee" }}>
                  <span style={{ fontSize: "14px" }}>Delete account</span>
                </Link>
              </Box>
            </Container>
          </Paper>
        </Grid>
      )}
    </PageLayout>
  );
};
