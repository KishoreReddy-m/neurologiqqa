import { IconButton, Typography } from "@mui/material";
import React, { useState, Fragment } from "react";
import { PageLayout } from "src/components/PageLayout/PageLayout";
import CreateProject from "./CreateProject";
import { ProjectsData } from "./ProjectData";
import ProjectList from "./ProjectList";
import CreateProjectImage from "../../assets/images/CreateProjectImage.svg";
import CustomDialog from "src/common/CustomDialog";

export const Project: React.FC = (Props) => {
  // Data
  const usersData = [
    {
      id: 1,
      project_title: "A2IOT Real-Time Analytics",
      project_description:
        "H2O is a fully open source, distributed in-memory machine learning platform with linear scalability.",
      ProjectDate: "18-02-2022",
    },
    {
      id: 2,
      project_title: "A2IOT Real-Time Analytics",
      project_description:
        "H2O is a fully open source, distributed in-memory machine learning platform with linear scalability.",
      ProjectDate: "18-02-2022",
    },
    {
      id: 3,
      project_title: "A2IOT Real-Time Analytics",
      project_description:
        "H2O is a fully open source, distributed in-memory machine learning platform with linear scalability.",
      ProjectDate: "18-02-2022",
    },
  ];

  const initialFormState = { id: null, name: "", username: "" };

  // Setting state
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleDialogClose = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const addUser = (user: any) => {
    console.log("user:--", user);
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id: any) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (id: number, updatedUser: any) => {
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const editRow = (user: any) => {
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };
  return (
    <div>
      <PageLayout header={<CreateProject />}>
        <ProjectList users={users} />
      </PageLayout>
    </div>
  );
};
