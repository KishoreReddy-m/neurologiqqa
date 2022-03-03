import React from "react";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import {
  Typography,
  Divider,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  DialogContentText,
  Container,
} from "@mui/material";
import CloseImage from "../../assets/images/CloseImage.svg";

const useStyles = makeStyles((theme: any) => ({
  backDrop: {
    backdropFilter: "blur(6px)",
    backgroundColor: "rgba(0,0,30,0.4)",
  },
  paper: {
    overflowY: "unset",
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}
interface Props {
  children: any;
  title: React.ReactNode | string;
  handleClose: () => void;
  isOpen: boolean;
  subTitle: string;
}
const CustomDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;
  return (
    <DialogTitle
      {...other}
      style={{
        height: "80px",
      }}
    >
      {children}
      {onClose ? (
        <img
          src={CloseImage}
          aria-label="close"
          onClick={onClose}
          className="customizedButton"
        />
      ) : null}
    </DialogTitle>
  );
};
export const CustomDialog: React.FC<Props> = ({
  children,
  handleClose,
  isOpen,
  subTitle,
  title,
}) => {
  const classes = useStyles();
  return (
    <>
      <Dialog
        BackdropProps={{
          classes: {
            root: classes.backDrop,
          },
        }}
        classes={{ paper: classes.paper }}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
      >
        <CustomDialogTitle id="customized-dialog-title" onClose={handleClose}>
          <Typography style={{ margin: "11px" }}>{title}</Typography>
        </CustomDialogTitle>
        <Divider></Divider>
        <DialogContent>
          <DialogContentText>{subTitle}</DialogContentText>
          {children}
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </>
  );
};
