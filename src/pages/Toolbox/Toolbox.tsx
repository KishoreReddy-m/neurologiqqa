import React from "react";
import "./Toolbox.less";
import Grid from "@mui/material/Grid";
import { PageLayout } from "src/components/PageLayout/PageLayout";
import ToolBoxHeader from "./ToolboxHeader";
import ToolBoxCard from "src/components/ToolBoxCard";
import { CardsData } from "src/common/CardData";
import NiqSwiper from "src/components/NiqSwiper";
export const Toolbox: React.VFC = () => {
  const slides = CardsData.filter((x) => x.isSwiper).map((tool, i) => (
    <ToolBoxCard key={i} tool={tool} />
  ));

  return (
    <PageLayout header={<ToolBoxHeader />}>
      <Grid container spacing={2} direction="row" className="niq-tool-box">
        <Grid item sm={6}>
          <NiqSwiper
            spaceBetween={30}
            pagination={{ clickable: true }}
            slides={slides}
          ></NiqSwiper>
        </Grid>
        {CardsData.filter((x) => !x.isSwiper).map((tool, i) => (
          <Grid item sm={tool.isLarge ? 6 : 3}>
            <ToolBoxCard tool={tool} />
          </Grid>
        ))}
      </Grid>
    </PageLayout>
  );
};
