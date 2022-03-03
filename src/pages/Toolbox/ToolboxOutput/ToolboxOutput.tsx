import React from "react";
import "./ToolboxOutput.less";
import { makeStyles } from "@mui/styles";
import {
  Card,
  Grid,
  CardContent,
  IconButton,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { PageLayout } from "src/components/PageLayout/PageLayout";
import NeurologicIQToolboxImage from "src/assets/images/NeurologicIQToolboxImage.svg";
import ShareImage from "src/assets/images/ShareImage.svg";
import CreateToolboxHeader from "./CreateToolboxHeader";
import DownloadFileImage from "src/assets/images/DownloadFileImage.svg";
const useStyles = makeStyles((theme: any) => ({
  card: {
    backgroundColor: theme.palette.secondary.main,
  },
}));
interface Props {
  cardHeader: string;
  location: any;
}
export const ToolboxOutput: React.FC<Props> = (Props) => {
  const classes = useStyles();
  const location: any = useLocation();
  return (
    <PageLayout header={<CreateToolboxHeader />}>
      <Grid direction="row" container spacing={2}>
        {location.state && (
          <Grid item sm={4}>
            <Card className={classes.card}>
              <CardHeader
                title={location.state.card.cardName}
                style={{ fontSize: "14px" }}
              ></CardHeader>
              <CardContent>
                <CardMedia className="media">
                  {" "}
                  <img src={NeurologicIQToolboxImage} alt="media" />
                </CardMedia>
                <Typography style={{ fontSize: "10px" }}>
                  {" "}
                  {location.state.card.cardContentTitle}
                </Typography>
                <Typography style={{ fontSize: "10px" }} color="textSecondary">
                  {" "}
                  {location.state.card.cardContent}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )}
        <Grid item xs={8}>
          <Card>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <img src={ShareImage} />
                </IconButton>
              }
              title="Input & Output Machine learning Use Case"
              style={{ fontSize: "14px" }}
            ></CardHeader>
            <CardContent>
              <Typography sx={{ mb: 1 }} style={{ fontSize: "14px" }}>
                Ex. Dictum. Ut. Lacinia dui ultricies. Ornare integer integer
                sed lectus morbi dictumst. Eget imperdiet ornare mauris sed
                luctus mauris mattis adipiscing mollis ipsum in est. Mattis
                tortor, sit faucibus. Nisi odio. Vel amet, ornare sapien
                adipiscing dapibus amet ut.
              </Typography>
              <Typography sx={{ mb: 1 }} style={{ fontSize: "14px" }}>
                Nec sodales vitae odio. In platea malesuada dictum sit nunc urna
                dictumst. Sit leo, in Efficitur pellentesque lorem lectus
                vulputate vel dui odio. Integer quam, ex. Ex. Dictum. Ut.
                Lacinia dui ultricies. Ornare integer integer sed lectus morbi
                dictumst. Eget imperdiet ornare mauris sed luctus mauris mattis
                adipiscing mollis ipsum in est. Mattis tortor, sit faucibus.
                Nisi odio. Vel amet, ornare sapien adipiscing dapibus amet ut.
                Ex. Dictum. Ut. Lacinia dui ultricies. Ornare integer integer
                sed lectus morbi dictumst. Eget imperdiet ornare mauris sed
                luctus mauris mattis adipiscing mollis ipsum in est. Mattis
                tortor, sit faucibus. Nisi odio. Vel amet, ornare sapien
                adipiscing dapibus amet ut.
              </Typography>
              <Typography sx={{ mb: 1 }} style={{ fontSize: "14px" }}>
                {" "}
                Nec sodales vitae odio. In platea malesuada dictum sit nunc urna
                dictumst. Sit Leo, in Efficitur pellentesque lorem lectus
                vulputate vel dui odio. Integer quam, ex. Ex. Dictum. Ut.
                Lacinia dui ultricies. Ornare integer integer sed lectus morbi
                dictumst. Eget imperdiet ornare mauris sed luctus mauris mattis
                adipiscing mollis ipsum in est. Mattis tortor, sit faucibus.{" "}
              </Typography>
              <Typography style={{ fontSize: "10px" }}>
                Nisi odio. Vel amet, ornare sapien adipiscing dapibus amet ut.
                Nec sodales vitae odio. In platea malesuada dictum sit nunc urna
                dictumst. Sit Leo, in Efficitur pellentesque lorem lectus
                vulputate vel dui odio. Integer quam, ex. Nec sodales vitae
                odio. In platea malesuada dictum sit nunc urna dictumst. Sit
                Leo, in Efficitur pellentesque lorem lectus vulputate vel dui
                odio. Integer quam, ex.
              </Typography>
            </CardContent>
            <div className="downloadfile">
              <div className="">
                <img src={DownloadFileImage} />
              </div>
              <div className="">
                <Typography sx={{ mb: 0 }} style={{ fontSize: "14px" }}>
                  Dataset 1
                </Typography>
                <Typography
                  sx={{ mb: 1 }}
                  style={{ fontSize: "10px" }}
                  color="secondary"
                >
                  39Mb
                </Typography>
              </div>
            </div>
            <div className="downloadfile">
              <div className="">
                <img src={DownloadFileImage} />
              </div>
              <div className="">
                <Typography sx={{ mb: 0 }} style={{ fontSize: "14px" }}>
                  Dataset 1
                </Typography>
                <Typography
                  sx={{ mb: 1 }}
                  style={{ fontSize: "10px", color: "#00d590" }}
                >
                  39Mb
                </Typography>
              </div>
            </div>
            <CardContent>
              <CardMedia
                image="/static/images/cards/live-from-space.jpg"
                title="Live from space album cover"
              >
                <iframe
                  id="video"
                  width="100%"
                  height="250"
                  src={"https://www.youtube.com/embed/hTWKbfoikeg"}
                  frameBorder="0"
                  allow="accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </CardMedia>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PageLayout>
  );
};
