import React, { useState } from "react";
import {
  Container,
  Typography,
  IconButton,
  Grid,
  TextField,
  Avatar,
  Box,
  Button,
} from "@mui/material";
import UploadImage from "../../assets/images/UploadImage.svg";
import CustomDialog from "src/common/CustomDialog";
import { useForm, Controller } from "react-hook-form";
import { PageLayout } from "src/components/PageLayout/PageLayout";
import FileUploadDropzone from "src/components/FileUpload/FileUploadDropzone";
import FileUploadContainer from "src/components/FileUpload/FileUploadContainer";

export const Support: React.FC = () => {
  const [open, setOpen] = useState(true);
  const { handleSubmit, control } = useForm({
    mode: "onChange",
    shouldUnregister: false,
  });
  const onSubmit = (data: any) => console.log("data", data);
  const handleClickOpen = () => {
    setOpen(false);
  };
  const handleDialogOpen = () => {
    setOpen(false);
  };
  const handleDialogClose = () => {
    setOpen(false);
  };
  return (
    <PageLayout>
      <div>
        <CustomDialog
          isOpen={open}
          title="Support"
          subTitle=""
          handleClose={handleDialogClose}
        >
          <Grid>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid item xs>
                <Controller
                  name="topic"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      className="mb-1"
                      required
                      label={<span className="form-label">Choose a topic</span>}
                      variant="standard"
                      value={value}
                      select
                      onChange={onChange}
                      fullWidth
                      type="text"
                    />
                  )}
                />
              </Grid>
              <Grid item xs>
                <Controller
                  name="description"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      required
                      value={value}
                      onChange={onChange}
                      label={
                        <span className="form-label">
                          Briefly describe your request here.
                        </span>
                      }
                      multiline
                      rows={2}
                      maxRows={4}
                      fullWidth
                      type="text"
                    />
                  )}
                />
                {/* <TextField
                  placeholder="Briefly describe your request here."
                  multiline
                  rows={2}
                  maxRows={4}
                  sx={{ width: 320, marginLeft: "7px" }}
                /> */}
              </Grid>
              <Grid item xs>
                <FileUploadContainer />
              </Grid>
              <div>
                <Box my={2}>
                  <Button
                    variant="contained"
                    style={{ float: "right" }}
                    color="primary"
                    type="submit"
                    className="button"
                  >
                    <span className="button-text">Submit</span>
                  </Button>
                </Box>
              </div>
            </form>
          </Grid>
        </CustomDialog>
      </div>
    </PageLayout>
  );
};
