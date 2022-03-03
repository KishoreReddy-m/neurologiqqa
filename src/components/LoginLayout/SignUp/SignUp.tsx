import * as React from "react";
import {
  Button,
  Grid,
  TextField,
  Box,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Backdrop,
  Select,
  CircularProgress,
  Theme,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import makeStyles from "../../../common/commonStyles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  EMAIL_REQUIRED,
  ENTER_VALID_EMAIL_ADDRESS,
  PASSWORD_REQUIRED,
  ENTER_VALID_PASSWORD,
} from "../../../common/constants";
import useUserRegistrationMutation from "src/hooks/mutations/useSignupMutation";
import { Register } from "src/interface/Register";

export const SignUp: React.FC = () => {
  const classes = makeStyles();
  const userRegistrationMutation = useUserRegistrationMutation();
  const { handleSubmit, control, watch } = useForm<Register>({
    mode: "onChange",
    shouldUnregister: false,
  });
  const password = watch("password");
  const onSubmit = async (request: Register) => {
    await userRegistrationMutation.mutateAsync(request);
  };
  const [values, setValues] = React.useState<any>({
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <React.Fragment>
      {userRegistrationMutation.isLoading && (
        <Backdrop
          open
          sx={{
            color: "#fff",
            zIndex: (theme: Theme) => theme.zIndex.drawer + 1,
          }}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Controller
              name="first_name"
              control={control}
              defaultValue=""
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
                  type="firstName"
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
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  required
                  label={<span className="form-label">LASTNAME</span>}
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
                  type="lastName"
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
                  <Select value={value} onChange={() => {}} label="Gender">
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
              defaultValue=""
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
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  required
                  label={<span className="form-label">PASSWORD</span>}
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
                  type="password"
                />
              )}
              rules={{
                required: PASSWORD_REQUIRED,
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                  message: ENTER_VALID_PASSWORD,
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="confirmPassword"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  required
                  label={<span className="form-label">CONFIRM PASSWORD</span>}
                  variant="standard"
                  value={value}
                  onChange={onChange}
                  InputLabelProps={{
                    classes: {
                      root: classes.label,
                      focused: classes.focused,
                    },
                  }}
                  fullWidth
                  error={value === password ? false : !!error}
                  helperText={error ? error.message : null}
                  type="password"
                />
              )}
              rules={{
                required: "Confirm password is required",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                  message: ENTER_VALID_PASSWORD,
                },
                validate: (value) =>
                  value === password
                    ? true
                    : "Confirm password does not match with password",
              }}
            />
          </Grid>
        </Grid>

        <Box mt={3}>
          <Typography
            color="primary"
            style={{ fontSize: "13px", textDecoration: "underline" }}
          >
            Password rules:
          </Typography>
          <Typography>
            <ul style={{ fontSize: "10px", marginLeft: "12px" }}>
              <li>Password contains min 8 letters</li>
              <li>Should contains at least a symbol and special character,</li>
              <li>
                {" "}
                Should contains upper and lower case letters and a number
              </li>
            </ul>
          </Typography>
          <Button
            variant="contained"
            style={{ float: "right", marginBottom: "20px" }}
            color="primary"
            type="submit"
            className="button"
          >
            <span className="button-text">Sign-Up</span>
          </Button>
        </Box>
      </form>
    </React.Fragment>
  );
};
