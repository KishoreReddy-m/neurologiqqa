import React from "react";
import smallIcon from "../../assets/images/smallicon.svg";
import { Box, Typography, Button, Container,Grid } from "@mui/material";
import CustomDialog from "src/common/CustomDialog";

export const WorkFlowUpgrade: React.VFC = () => {
  const [open, setOpen] = React.useState(true);
  const handleClickOpen = () => {
    setOpen(false);
  };
  const handleDialogClose = () => {
    setOpen(false);
  };
  return (
    <>
        <CustomDialog
          title="Workflow Upgrade"
          isOpen={open}
          subTitle="Unfortunately, no other workflows are available. You can now upgrade. You are currently using Flow 10."
          handleClose={handleDialogClose}
        >  
             <Typography sx={{my: 5}} className="text-header" variant="h2" gutterBottom component="div" color="primary"> 
                Flow 25
              </Typography>
                
            <Grid>
            <Typography color="">5,00,00 € / Monat</Typography>
                <Typography display="block" sx={{ mt: -1 }} variant="caption" color="secondary"><a>zzgl. MwSt</a></Typography>
            </Grid>
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
              <span className="button-text">Yes, upgrade</span>
            </Button>
          </Box>
        </CustomDialog>
    </>
  );
};
