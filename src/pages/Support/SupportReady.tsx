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

 const SupportReadyPage: React.FC = () => {
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
    <>
      <div>
        <CustomDialog
          isOpen={open}
          title="Support"
          subTitle="Your request was successfully sent to our
          forwarded to support. We'll get back to you as soon as possible."
          handleClose={handleDialogClose}
        >
          <Grid>
              <div>
                <Box my={2}>
                  <Button
                    variant="contained"
                    style={{ float: "right" }}
                    color="primary"
                    type="submit"
                    className="button"
                  >
                    <span className="button-text">Ready</span>
                  </Button>
                </Box>
              </div>
          </Grid>
        </CustomDialog>
      </div>
    </>
  );
};
export default SupportReadyPage;