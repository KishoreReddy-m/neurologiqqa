import React from "react";
import './ForgotPassword.less'
import { Button, Box } from "@mui/material";
import { TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import makeStyles from '../../../common/commonStyles'
import { ResendEmail as ResendEmailVerify } from "src/interface/ResendEmail";
import { EMAIL_REQUIRED, ENTER_VALID_EMAIL_ADDRESS } from "src/common/constants";
import useResendEmailMutation from "src/hooks/mutations/useResendEmailMutation";


 const ConfirmPasswordForm: React.FC = () => {
  const classes = makeStyles();
  const resendEmailMutation = useResendEmailMutation();
  const { handleSubmit, control, watch } = useForm<ResendEmailVerify>({
    mode: "onChange",
    shouldUnregister: false,
  });
  const onSubmit = (data: ResendEmailVerify) => {
    resendEmailMutation.mutate(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
      <Controller
        name="mail"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            required
            label={<span className="form-label">E-Mail</span>}
            variant="standard"
            InputLabelProps={{
              classes: {
                root: classes.label,
                focused: classes.focused,
              },
            }}
            value={value}
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
      <Box mt={3}>
        <Button
          variant="contained"
          style={{ float: "right", marginBottom:'8px' }}
          color="primary"
          type="submit"
          className="button"
        >
          <span className="button-text">Send</span>
        </Button>
      </Box>
    </form>
  );
};
export default ConfirmPasswordForm;
