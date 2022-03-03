import React, { useState } from "react";
import { Box, Button } from "@mui/material";

type Props = {
  handleClose: () => void;
  handleDelete: () => void;
};
export const DeleteProject: React.FC<Props> = (Props) => {
  const [open, setOpen] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleDialogClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box mt={3}>
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          onClick={handleDialogClose}
        >
          <span className="button-text">Interrupt</span>
        </Button>
        <Button
          variant="contained"
          style={{ float: "right", width: "158px" }}
          color="primary"
          type="submit"
          className="button"
          onClick={() => {
            Props.handleDelete();
            Props.handleClose();
          }}
        >
          <span className="button-text">Yes, delete the project</span>
        </Button>
      </Box>
    </>
  );
};
