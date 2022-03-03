import React, { useEffect, useState, useCallback } from "react";
import {
  Container,
  Typography,
  IconButton,
  Grid,
  TextField,
  Box,
  Button,
  AvatarGroup,
  Avatar,
  OutlinedInput,
  MenuItem,
  FormControl,
  Checkbox,
} from "@mui/material";
import { Theme, useTheme } from "@mui/material/styles";
import CreateProjectImage from "../../../assets/images/CreateProjectImage.svg";
import OwnerImage from "../../../assets/images/OwnerImage.svg";
import AddUserImage from "../../../assets/images/commonImages/AddUserImage";
import CustomDialog from "src/common/CustomDialog";
import { Link, useHistory, useLocation } from "react-router-dom";
import deleteImage from "../../../assets/images/deleteImage.svg";
import { useForm, Controller } from "react-hook-form";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuList from "@mui/material/MenuList";
import makeStyles from "../ProjectStyles";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
type Props = {
  theme?: any;
  id?: string;
  color?: any;
};
export const CreateProject: React.FC<Props> = (Props) => {
  const theme = useTheme();
  const classes: any = makeStyles();
  const [open, setOpen] = useState(false);
  const [select, handleSelect] = useState(false);
  const history = useHistory();
  const [selected, setSelected] = useState<any[]>([]);
  const [user, SetUserDelete] = useState(false);
  const { handleSubmit, control } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data: any) => {};
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleDialogOpen = () => {
    setOpen(true);
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleDialogClose = () => {
    setOpen(false);
    // Props.setEditProject(false)
  };
  const addUser = () => {
    history.push("/app/projectFlows");
  };
  const handleClose = () => handleSelect(false);
  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];
  const isAllSelected = names.length > 0 && selected.length === names.length;

  const handleChange = (event: any) => {
    const value = event.target.value;
    if (value[value.length - 1] === "all") {
      setSelected(selected.length === names.length ? [] : names);
      return;
    }
    setSelected(value);
  };
  const location: any = useLocation();
  return (
    <>
      <div>
        <Typography className="new-project">
          <div style={{ display: "flex" }}>
            <div style={{ margin: "10px" }}>
              <Typography>Start new project</Typography>
            </div>
            <div>
              <IconButton color="primary" onClick={handleToggle}>
                <img src={CreateProjectImage} />
              </IconButton>
            </div>
          </div>
        </Typography>
      </div>
      <div>
        <CustomDialog
          isOpen={open}
          title={
            <Typography
              color={
                theme.palette.mode === "light"
                  ? theme.palette.text.secondary
                  : "none"
              }
            >
              Start new AI Project
            </Typography>
          }
          subTitle=""
          handleClose={handleDialogClose}
        >
          <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
            <Grid>
              <Grid item sx={{ mb: 4 }}>
                <Controller
                  name="projectTitle"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      required
                      label="Project Title"
                      variant="standard"
                      value={value}
                      classes={classes}
                      onChange={onChange}
                      fullWidth
                      error={!!error}
                      helperText={error ? error.message : null}
                      type="text"
                    />
                  )}
                />
              </Grid>
              <Grid item sx={{ mb: 2 }}>
                <Controller
                  name="projectDescription"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      placeholder="Project description"
                      value={value}
                      onChange={onChange}
                      className={classes.decriptionInput}
                      multiline
                      rows={2}
                      maxRows={4}
                      sx={{ width: 320 }}
                    />
                  )}
                />
              </Grid>
              <Grid item sx={{ mb: 2 }}>
                <Controller
                  name="inviteToedit"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      required
                      label="Invite to someone edit"
                      variant="standard"
                      className={classes.textInput}
                      value={value}
                      onChange={onChange}
                      fullWidth
                      type="text"
                    />
                  )}
                />
              </Grid>
              <Grid item sx={{ mb: 2 }}>
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      display: "flex",
                      // flexWrap: "nowrap",
                    }}
                  >
                    {selected.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, selected, theme)}
                      >
                        <ListItemIcon>
                          <img alt="" src={OwnerImage} />
                        </ListItemIcon>
                        {/* <ListItemText>{name}</ListItemText> */}
                      </MenuItem>
                    ))}
                  </div>
                  <div>
                    <FormControl>
                      <Button onClick={() => handleSelect(true)}>
                        <AddUserImage
                          color={
                            theme.palette.mode === "dark"
                              ? theme.palette.primary.main
                              : theme.palette.text.secondary
                          }
                        />
                        {/* <img
                                        src={AddUserImage}
                                        id="test"
                                        onClick={() => handleSelect(true)}
                                      /> */}
                      </Button>
                      <Select
                        open={select}
                        labelId="standard"
                        id="standard"
                        multiple
                        style={{ display: "none" }}
                        color="primary"
                        fullWidth
                        variant="standard"
                        label="Users"
                        value={selected}
                        onClose={handleClose}
                        onChange={handleChange}
                        MenuProps={{
                          anchorEl: document.getElementById("test"),
                        }}
                      >
                        <MenuItem value="all">
                          <ListItemIcon>
                            <Checkbox
                              checked={isAllSelected}
                              indeterminate={
                                selected.length > 0 &&
                                selected.length < names.length
                              }
                            />
                          </ListItemIcon>
                          <ListItemText primary="Select All" />
                        </MenuItem>
                        {names.map((name) => (
                          <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, selected, theme)}
                          >
                            <ListItemIcon>
                              <img src={OwnerImage} />
                            </ListItemIcon>
                            <ListItemText>{name}</ListItemText>
                          </MenuItem>
                          // <MenuItem
                          //   key={name}
                          //   value={name}
                          //   style={getStyles(name, personName, theme)}
                          // >
                          //   {name}
                          // </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </Grid>
              <Box m={2}>
                <Button
                  variant="contained"
                  style={{ float: "right" }}
                  color="primary"
                  type="submit"
                  className="button"
                  onClick={handleDialogClose}
                >
                  <span className="button-text">Further</span>
                </Button>
              </Box>
            </Grid>
          </form>
        </CustomDialog>
      </div>
    </>
  );
};
