import React, { VFC } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import ToolboxAddImage from "../../assets/images/ToolboxAddImage.svg";
import { useHistory } from "react-router-dom";
import "./ToolBoxCard.less";
import CreateToolbox from "./CreateToolbox";
import { Tool } from "src/interface/Toolbox";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  card: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export interface Props {
  tool: Tool;
}
export const ToolBoxCard: VFC<Props> = ({ tool }) => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Card className={clsx("toolbox-card", `${tool.isSwiper && classes.card}`)}>
      <CardHeader
        action={<CreateToolbox cardIcon={ToolboxAddImage} />}
        title={
          <Typography
            color={!tool.isLarge ? "secondary" : ""}
            className={clsx("cardText", { "card-text-size": tool.isLarge })}
          >
            {tool.title}
          </Typography>
        }
      />
      <Box flexDirection="column">
        <CardContent>
          <CardMedia className="media">
            <img
              alt="toolbox"
              src={`${tool.image}`}
              onClick={() => history.push("/app/toolboxoutput", { tool })}
            />
          </CardMedia>
          <div className="card-content">{tool.subTitle}</div>
          <Typography className="card-content">{tool.description}</Typography>
        </CardContent>
      </Box>
    </Card>
  );
};
