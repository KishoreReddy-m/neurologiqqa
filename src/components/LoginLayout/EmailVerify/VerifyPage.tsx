import React from "react";
import { Button, Box } from "@mui/material";
import { TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import makeStyles from '../../../common/commonStyles'
import { EmailVerify } from "src/interface/EmailVerify";
import { EMAIL_REQUIRED, ENTER_VALID_EMAIL_ADDRESS } from "src/common/constants";
import useEmailVerifyMutation from "src/hooks/mutations/useVerifyMutation";


 const EmialVerify: React.FC = () => {
  const classes = makeStyles();
  const EmailVerifyMutation = useEmailVerifyMutation();
  const { handleSubmit, control, watch } = useForm<EmailVerify>({
    mode: "onChange",
    shouldUnregister: false,
  });
  const onSubmit = (data: EmailVerify) => {
    EmailVerifyMutation.mutate(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
      <Controller
        name="token"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label={<span className="form-label">token</span>}
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
export default EmialVerify;
