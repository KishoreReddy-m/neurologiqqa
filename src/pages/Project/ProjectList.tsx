import React, { useMemo, useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import "./Project.less";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
} from "@mui/material";
import DynamicDonutChart from "src/components/DynamicDonutChart";
import DeleteProjectImage from "../../assets/images/DeleteProjectImage.svg";
import OwnerImage from "../../assets/images/OwnerImage.svg";
import FlowManageImage from "src/assets/images/FlowManageImage.svg";
import EditImage from "src/assets/images/EditImage.svg";
import DeleteProject from "./DeleteProject";
import CustomDialog from "src/common/CustomDialog";
import makeStyles from "./ProjectStyles";
import { useHistory } from "react-router-dom";
type Props = {
  projectData: any[];
  deleteUser: () => void;
  users: any;
};
const ProjectList: React.FC<Props> = (Props) => {
  const history = useHistory();
  const classes = makeStyles();
  const [open, setOpen] = useState(false);
  const [projectId, setProjectId] = useState(0);
  console.log('Props"--', Props.users);

  const handleClickOpen = (id: number) => {
    setProjectId(id);
    setOpen(true);
  };
  const handleDialogClose = () => {
    setOpen(false);
  };
  const handleDelete = () => {};
  const handleCancel = () => {
    setOpen(false);
    setProjectId(0);
  };
  // const data = useMemo(() => {
  //   return [
  //     {
  //       text: "20%",
  //       value: 5,
  //       color: "#7986CB",
  //     },
  //     {
  //       text: "8%",
  //       value: 2,
  //       color: "#FFD54F",
  //     },
  //     {
  //       text: "72%",
  //       value: 18,
  //       color: "#171934",
  //       ignore: true,
  //     },
  //   ];
  // }, []);
  const data2 = useMemo(() => {
    return [
      {
        text: "20%",
        value: 5,
        color: "#c5b8f6",
      },
      {
        text: "20%",
        value: 4,
        color: "#7986CB",
      },
      {
        text: "8%",
        value: 4,
        color: "#65D195",
      },
      {
        text: "8%",
        value: 6,
        color: "#FFD54F",
      },
      {
        text: "72%",
        value: 6,
        color: "#171934",
        ignore: true,
      },
    ];
  }, []);
  return (
    <>
      <Grid container spacing={2}>
        {Props.users &&
          Props.users.map((project, i) => {
            return (
              <Grid item xs={12}>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={8}>
                        <CardHeader
                          action={
                            <img
                              src={EditImage}
                              alt="editImage"
                              className={classes.editImage}
                              onClick={() => {}}
                            />
                          }
                          title={project.project_title}
                        />
                        <Typography variant="body2" color="text.primary">
                          {project.project_description}
                        </Typography>
                        <CardActions className="pl-0">
                          <div className="avatar-container mt-2">
                            <div className="avatar-block">
                              <div style={{ display: "block" }}>
                                <Typography
                                  component="legend"
                                  color="text.secondary"
                                >
                                  Date
                                </Typography>
                                <Typography color="text.secondary">
                                  {"12-10-2022"}
                                </Typography>
                              </div>
                              <div style={{ display: "block" }}>
                                <Typography
                                  component="legend"
                                  color="text.secondary"
                                >
                                  Owner
                                </Typography>
                                <Avatar alt="Remy Sharp" src={OwnerImage} />
                              </div>
                              <div style={{ display: "block" }}>
                                <Typography
                                  component="legend"
                                  color="text.secondary"
                                >
                                  Owner
                                </Typography>
                                <div style={{ display: "flex" }}>
                                  <div
                                    style={{
                                      display: "flex",
                                      flexWrap: "nowrap",
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div className="mt-2" style={{ cursor: "pointer" }}>
                              <img
                                src={DeleteProjectImage}
                                alt="delete"
                                onClick={() => handleClickOpen(project.id)}
                              />
                            </div>
                          </div>
                        </CardActions>
                      </Grid>
                      <Grid
                        className="d-flex justify-content-space-between"
                        item
                        xs={4}
                      >
                        <div className="d-flex flows-circle">
                          <DynamicDonutChart
                            chartId={"default-chart"}
                            width={200}
                            height={200}
                            ringWidth={10}
                            color={"#294360"}
                            outerCircleMargin={10}
                            textColor={"#fff"}
                            chartTitle={"Flows Used"}
                            data={data2}
                          />
                          <IconButton
                            className={`${classes.btnIconPrimary} ${classes.btnPrimaryRevere}`}
                          >
                            <img
                              alt=""
                              src={FlowManageImage}
                              onClick={() => history.push("/app/flow-manager")}
                            />
                          </IconButton>
                        </div>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
      </Grid>
      <Grid>
        <CustomDialog
          title="Delete project"
          isOpen={open}
          subTitle=" Are you sure you want to delete the project? The data cannot be recovered."
          handleClose={handleCancel}
        >
          <DeleteProject
            handleDelete={handleDelete}
            handleClose={handleCancel}
          />
        </CustomDialog>
      </Grid>
    </>
  );
};
export default ProjectList;
