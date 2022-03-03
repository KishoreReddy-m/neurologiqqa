import React, { VFC } from "react";
import {
  Button,
  Grid,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import makeStyles from "../../../common/commonStyles";
import { Controller, useForm } from "react-hook-form";
import useUpdateCompanyMutation from "src/hooks/mutations/useUpdateCompanyMutation";
import { Company } from "src/interface/Company";

const countryList = [
  {
    value: "india",
    label: "India",
  },
  {
    value: "germany",
    label: "Germany",
  },
  {
    value: "australia",
    label: "Australia",
  },
  {
    value: "america",
    label: "America",
  },
];

export interface Props {
  company?: Company;
}
export const CompanyForm: VFC<Props> = ({ company }) => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<Company>({
    mode: "onChange",
    shouldUnregister: false,
    defaultValues: company,
  });
  const updateCompanyMutation = useUpdateCompanyMutation();

  const classes = makeStyles();
  const updateCompany = (data: Company) => {
    updateCompanyMutation.mutate(data);
  };
  return (
    <form onSubmit={handleSubmit(updateCompany)}>
      <Grid container sx={{ margin: "27px 0px 0px 16px" }}>
        <Grid item xs={12} sm={6}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextField
                label={<span className="form-label">Company</span>}
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
                type="company"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="address.address_line_1"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextField
                label={<span className="form-label">Address Line 1</span>}
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
                type="text"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="address.address_line_2"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextField
                label={<span className="form-label">Address Line 2</span>}
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
                type="text"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="address.city"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextField
                label={<span className="form-label">City</span>}
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
                type="text"
              />
            )}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Controller
            name="address.country"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <FormControl variant="standard" fullWidth>
                <InputLabel id="demo-simple-select-standard-label">
                  Country
                </InputLabel>
                <Select value={value} onChange={onChange} label="Country">
                  {countryList.map((country) => (
                    <MenuItem key={country.value} value={country.value}>
                      {country.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="address.state_province"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextField
                label={<span className="form-label">State Province</span>}
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
                type="text"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="address.zip_code"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextField
                label={<span className="form-label">Postcode</span>}
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
                type="text"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          isValid {`${isValid}`}
          <Button
            disabled={!isValid}
            variant="contained"
            style={{ float: "right", width: "150px", marginTop: "1rem" }}
            color="primary"
            type="submit"
            className="button"
          >
            <span className="button-text">Update </span>
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
