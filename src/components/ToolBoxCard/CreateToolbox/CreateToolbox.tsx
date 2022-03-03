import React from "react";
import { styled } from "@mui/material/styles";
import { makeStyles } from '@mui/styles';
import {
  Button,
  Box,
  Typography,
  Grid,
  TextField,
  ListItemIcon,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { Link } from "react-router-dom";
import "./CreateToolbox.less";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseImage from "../../../assets/images/CloseImage.svg";
import PopoverImage from "../../../assets/images/PopoverImage.svg";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useForm, Controller } from "react-hook-form";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const useStyles = makeStyles((theme: any) => ({
  backDrop: {
    backdropFilter: "blur(6px)",
    backgroundColor: "rgba(0,0,30,0.4)",
  },
  paper: {
    overflowY: "unset",
  },
  dialogTitle: {
    backgroundColor: theme.palette.secondary.main,
  },
  textField: {
    margin: theme.spacing(1),
  },
  createProject:{
    color:theme.palette.text.primary,
  }
}));
const projectsList = [
  {
    value: "Project1",
    label: "Project1",
  },
  {
    value: "Project2",
    label: "Project2",
  },
  {
    value: "Project3",
    label: "Project3",
  },
];
const streamsList = [
  {
    value: "Stream1",
    label: "Stream1",
  },
  {
    value: "Stream2",
    label: "Stream2",
  },
  {
    value: "Stream3",
    label: "Stream3",
  },
];
export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;
  const classes = useStyles();
  return (
    <DialogTitle
      sx={{ m: 0, p: 2, width: "300px", height: "95px" }}
      {...other}
      className={classes.dialogTitle}
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
interface Props {
  cardIcon: any;
}
export const CreateToolbox: React.FC<Props> = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  const [project, setProjectList] = React.useState("");
  const [stream, setStreamList] = React.useState("");
  const classes = useStyles();
  const { handleSubmit } = useForm({
    mode: "onChange",
    shouldUnregister: false,
  });
  const onSubmit = (data: any) => console.log("data", data);
  const [currency, setCurrency] = React.useState("EUR");

  const handleProjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProjectList(event.target.value);
    setStreamList(event.target.value);
  };
  const handleStreamChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStreamList(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [age, setAge] = React.useState("");
  return (
    <div>
      <Typography>
        <img
          src={props.cardIcon}
          onClick={handleClickOpen}
          className="add-image"
        />
      </Typography>
      <BootstrapDialog
        BackdropProps={{
          classes: {
            root: classes.backDrop,
          },
        }}
        classes={{ paper: classes.paper }}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <Grid container>
            <Grid item xs={4}>
              <img src={PopoverImage} />
            </Grid>
            <Grid item xs={4}>
              <Typography color="background.default" className="title-text">
                AI tool for evaluating results
              </Typography>
            </Grid>
          </Grid>
        </BootstrapDialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid>
              <Grid item sx={{ mr: 2 }}>
                <TextField
                  id="project"
                  name="project"
                  value={project}
                  fullWidth
                  onChange={handleProjectChange}
                  select
                  className={classes.textField}
                  label="Choose a project"
                  variant="standard"
                >
                  {projectsList.map((project) => (
                    <MenuItem key={project.value} value={project.value}>
                      {project.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  id="standard"
                  name="stream"
                  value={stream}
                  fullWidth
                  select
                  onChange={handleStreamChange}
                  className={classes.textField}
                  label="Select Stream"
                  variant="standard"
                >
                  {streamsList.map((stream) => (
                    <MenuItem key={stream.value} value={stream.value}>
                      {stream.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
            <Box m={2}>
              <Link to="/create-project" className={classes.createProject}>
                <span className="create-project">Create new project</span>
              </Link>
              <Button
                variant="contained"
                style={{ float: "right" }}
                color="primary"
                type="submit"
                className="button"
              >
                <span className="button-text">Add to</span>
              </Button>
            </Box>
          </form>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};
