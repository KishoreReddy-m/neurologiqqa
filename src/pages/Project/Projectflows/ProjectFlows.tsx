import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Box,
  Dialog,
  Typography,
} from "@mui/material";
import CloseImage from "../../../assets/images/CloseImage.svg";
import "./ProjectFlows.less";
import { useHistory } from "react-router-dom";
import NiqSwiper from "src/components/NiqSwiper";
const flowsData = [
  {
    id: 1,
    cardName: "Flow 5",
    cardContentTitle: "Flow 5-Easy start",
    cardContent:
      "H2O is a fully open source, distributed in-memory machine learning platform with linear scalability. H2O supports the most widely used statistical & machine learning algorithms including gradient boosted machines, generalized linear models, deep learning and more. H2O also has an industry leading AutoML functionality that automatically runs through all the algorithms and their hyperparameters to produce a leaderboard of the best models. The H2O platform is used by over 18,000 organizations globally and is extremely popular in both the R & Python communities. ",
    cardFooterContent: "€25000.00 / month plus VAT can be canceled monthly",
    cardFooter: "choose plan",
  },
  {
    id: 2,
    cardName: "Flow 10",
    cardContentTitle: "Flow 10 - Maximum an Flexibilität",
    cardContent:
      "H2O is a fully open source, distributed in-memory machine learning platform with linear scalability. H2O supports the most widely used statistical & machine learning algorithms including gradient boosted machines, generalized linear models, deep learning and more. H2O also has an industry leading AutoML functionality that automatically runs through all the algorithms and their hyperparameters to produce a leaderboard of the best models. The H2O platform is used by over 18,000 organizations globally and is extremely popular in both the R & Python communities.",
    cardFooterContent: "€25000.00 / month plus VAT can be canceled monthly",
    cardFooter: "choose plan",
  },

  {
    id: 3,
    cardName: "Flow 25",
    cardContentTitle: "Maximum an flexibility",
    cardContent:
      "H2O is a fully open source, distributed in-memory machine learning platform with linear scalability. H2O supports the most widely used statistical & machine learning algorithms including gradient boosted machines, generalized linear models, deep learning and more. H2O also has an industry leading AutoML functionality that automatically runs through all the algorithms and their hyperparameters to produce a leaderboard of the best models. The H2O platform is used by over 18,000 organizations globally and is extremely popular in both the R & Python communities.",
    cardFooterContent: "€25000.00 / month plus VAT can be canceled monthly",
    cardFooter: "choose plan",
  },
];

export interface Props {
  isOpen: boolean;
}
export const ProjectFlows: React.VFC<Props> = ({ isOpen }) => {
  const history = useHistory();
  const settings = {
    className: "center",
    centerMode: true,
    arrows: false,
    infinite: false,
    slidesToShow: 3,
    // speed: 500,
    dots: false,
    slidesToScroll: 1,
    initialSlide: 1,
    swipeToSlide: true,
  };
  const handleClose = () => {};
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <NiqSwiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        slides={flowsData.map((card) => {
          return (
            <Card style={{ width: "300px" }}>
              <div className="ribbon ribbon-top-left">
                <span>Best Value</span>
              </div>
              <CardHeader
                action={
                  <img src={CloseImage} className="close-image close-flow" />
                }
                title={
                  <Typography
                    className="flow-header"
                    color="primary"
                    variant="h2"
                    gutterBottom
                    component="div"
                  >
                    <p>{card.cardName}</p>
                  </Typography>
                }
              />
              <CardContent>
                <Typography sx={{ mb: 1 }} style={{ fontSize: "20px" }}>
                  {card.cardContentTitle}
                </Typography>
                <Typography variant="body2" style={{ fontSize: "14px" }}>
                  {card.cardContent}
                </Typography>
              </CardContent>
              <CardActions className="text-align-left">
                <Typography>
                  {card.cardFooterContent}
                  <Typography color="secondary"> </Typography>
                </Typography>

                <Button
                  variant="contained"
                  style={{
                    float: "right",
                    width: "230px",
                    height: "30px",
                  }}
                  color="primary"
                  type="submit"
                  onClick={() => history.push("/app/workflow-upgrade")}
                >{`${card.cardFooter}`}</Button>
              </CardActions>
            </Card>
          );
        })}
      />
    </Dialog>
  );
};
