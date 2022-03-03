import { Typography, Grid, IconButton } from "@mui/material";
import CloudImage from "src/assets/images/CloudImage.svg";
import PlayIcon from "src/assets/images/PlayIcon.svg";
import StarIcon from "@mui/icons-material/Star";
import React, { useState } from "react";
import ProjectFlows from "src/pages/Project/Projectflows";

export const FlowManagerHeader: React.VFC = () => {
  const [open, setOpen] = useState(false);
  return (
    <Grid container spacing={2}>
      <div className="header-navigation-wrap">
        <div className="header-l">
          <Grid item xs={4}>
            <Typography>A2ioT Real-Time Analaytics</Typography>
          </Grid>
        </div>
        <div className="header-r">
          <Grid
            className="border-right"
            item
            xs={4}
            style={{ display: "flex" }}
          >
            <Typography sx={{ mr: 2 }} color="secondary">
              Used
            </Typography>
            <Typography> 7/10</Typography>
            <Typography>
              <IconButton>
                <img src={CloudImage} />
              </IconButton>
            </Typography>
          </Grid>
          <Grid>
            <IconButton
              size="large"
              edge="end"
              color="primary"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <img alt="" src={PlayIcon} />
            </IconButton>
          </Grid>
        </div>
      </div>
      <ProjectFlows isOpen={open} />
    </Grid>
  );
};
