import React from "react";
import smallIcon from "../../assets/images/smallicon.svg";
import { Box, Typography, Button } from "@mui/material";
import { PageLayout } from "src/components/PageLayout/PageLayout";
import CustomDialog from "src/common/CustomDialog";

export const SignOut: React.VFC = () => {
  const [open, setOpen] = React.useState(true);
  const handleClickOpen = () => {
    setOpen(false);
  };
  const handleDialogClose = () => {
    setOpen(false);
  };
  return (
    <>
      <PageLayout>
        <CustomDialog
          title="Delete"
          isOpen={open}
          subTitle=" Do you really want to log out?"
          handleClose={handleDialogClose}
        >
          <Box mt={3}>
            <Button variant="outlined" color="primary" type="submit">
              <span className="button-text">Interrupt</span>
            </Button>
            <Button
              variant="contained"
              style={{ float: "right" }}
              color="primary"
              type="submit"
              className="button"
            >
              <span className="button-text">Yes</span>
            </Button>
          </Box>
        </CustomDialog>
      </PageLayout>
    </>
  );
};
