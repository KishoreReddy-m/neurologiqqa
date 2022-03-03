import React, { useState } from "react";
import { AppBar, Box, Paper, Tab, Tabs, Typography } from "@mui/material";
import { PageLayout } from "src/components/PageLayout/PageLayout";
import "./FlowManager.less";
import FlowManagerHeader from "./FlowManagerHeader";
import ToolSideBar from "./ToolSideBar";
import { AddOutlined } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { TabContainer } from "./TabContainer/TabContainer";

export interface Props {
  children: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<Props> = ({ children, index, value }) => {
  return (
    <div role="tabpanel" style={{ display: value == index ? "block" : "none" }}>
      <Box sx={{ p: 1 }}> {children}</Box>
    </div>
  );
};

export const FlowManager: React.VFC = () => {
  const [value, setValue] = React.useState(0);
  const [tabs, setTabs] = React.useState<any[]>([]);
  const tabContainerContent = () => (
    <div className="dndflow">
      <TabContainer />
    </div>
  );

  const [tabContents, setTabContents] = React.useState<React.ReactNode[]>([
    tabContainerContent(),
  ]);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const setTabsList = () => {
    const tabIndex = (tabs.length == 0 ? 1 : tabs.length) + 1;
    const newTab = {
      value: `${tabIndex}`,
      label: `STREAM ${tabIndex}`,
    };
    setTabs([...tabs, newTab]);
    setTabContents([...tabContents, tabContainerContent()]);
  };
  return (
    <PageLayout className="toolbox-navigation" header={<FlowManagerHeader />}>
      <Box
        sx={{
          width: "calc(100% - 243px)",
          marginRight: "265px",
          backgroundColor: "background",
        }}
      >
        <Tabs onChange={handleChange} value={value}>
          <Tab label="STREAM1"></Tab>
          {tabs.map((tab, i) => (
            <Tab key={tab.label} label={tab.label} color="primary" />
          ))}
          <Tab label={<AddOutlined />} onClick={setTabsList}></Tab>
        </Tabs>

        {tabContents.map((x, index) => (
          <TabPanel key={index} value={value} index={index}>
            {x}
          </TabPanel>
        ))}
      </Box>
      <ToolSideBar />
    </PageLayout>
  );
};
