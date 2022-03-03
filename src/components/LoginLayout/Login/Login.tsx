import React from "react";
import "./Login.less";
import {
  Button,
  Box,
  CircularProgress,
  Backdrop,
  Theme,
  InputAdornment,
  IconButton,
} from "@mui/material";
import makeStyles from "../../../common/commonStyles";
import { TextField, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  EMAIL_REQUIRED,
  ENTER_VALID_EMAIL_ADDRESS,
  PASSWORD_REQUIRED,
} from "../../../common/constants";
import { useForm, Controller } from "react-hook-form";
import { Login as LoginForm } from "src/interface/Login";
import useLoginMutation from "src/hooks/mutations/useLoginMutation";


export const Login: React.FC = () => {
  const classes = makeStyles();
  const loginMutation = useLoginMutation();
  const { handleSubmit, control } = useForm<LoginForm>({
    mode: "onChange",
    shouldUnregister: false,
  });
  const onSubmit = (data: LoginForm) => {
    loginMutation.mutate(data);
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
      {loginMutation.isLoading && (
        <Backdrop
          sx={{
            color: "#fff",
            zIndex: (theme: Theme) => theme.zIndex.drawer + 1,
          }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <form
        className={classes.root}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        autoComplete="off"
      >
        <Controller
          name="mail"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              required
              label={<span className="form-label">E-Mail</span>}
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
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              required
              label={<span className="form-label">Password</span>}
              variant="standard"
              fullWidth
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={onChange}
              error={!!error}
              InputLabelProps={{
                classes: {
                  root: classes.label,
                  focused: classes.focused,
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              helperText={error ? error.message : null}
            />
          )}
          rules={{
            required: PASSWORD_REQUIRED,
          }}
        />
        <Box mt={10}>
          <Link to="/forgot-password" className={classes.forgotPassword}>
            <span className="wrong-password">Forgot password</span>
          </Link>
          <Button
            variant="contained"
            style={{ float: "right", marginRight: "-17px" }}
            color="primary"
            type="submit"
            className="button"
          >
            <span className="button-text">Login</span>
          </Button>
        </Box>
      </form>
    </React.Fragment>
  );
};
