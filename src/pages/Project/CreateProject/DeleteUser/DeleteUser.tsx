import React,{useState} from "react";
import { Box, Typography, Button } from "@mui/material";
import { PageLayout } from "src/components/PageLayout/PageLayout";
import CustomDialog from "src/common/CustomDialog";

export const DeleteUser: React.VFC = () => {
  const [open, setOpen] = useState(true);
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
          title="Remove user from project"
          isOpen={open}
          subTitle="Would you like the user Maximilian.muster@gmail.com from the Real-Time Analytics project?"
          handleClose={handleDialogClose}
        >
          <Box mt={3}>
            <Button variant="outlined" color="primary" type="submit">
              <span className="button-text">Interrupt</span>
            </Button>
            <Button
              variant="contained"
              style={{ float: "right", width:'158px' }}
              color="primary"
              type="submit"
              className="button"
            >
              <span className="button-text">Yes, remove user</span>
            </Button>
          </Box>
        </CustomDialog>
      </PageLayout>
    </>
  );
};
