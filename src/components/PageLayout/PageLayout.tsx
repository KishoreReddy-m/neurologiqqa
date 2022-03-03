import { Container, Grid } from "@mui/material";
import React from "react";
import { useAppStateContext } from "src/contexts/SideBarContext";
import HeaderComponent from "../MainLayout/Header";
interface Props {
  children: any;
  header?: React.ReactNode;
  className?: string;
}
export interface HeaderMenuProps {
  title?: string;
  middleContent?: React.ReactNode;
  topRightContent?: React.ReactNode;
}
export const PageLayout: React.FC<Props> = ({
  children,
  header,
  className,
}) => {
  const [{ open }] = useAppStateContext();
  return (
    <Container
      className={`${className ?? ""} ${open ? "header-open" : "header-closed"}`}
    >
      <HeaderComponent header={header} />
      <Grid>{children}</Grid>
    </Container>
  );
};
