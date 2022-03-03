import { Button } from "@mui/material";
import CreateProjectImage from "../../../assets/images/CreateProjectImage.svg";
import React, { DragEvent } from "react";
import FlowmanagerImage from "../../../assets/images/FlowmanagerImage.svg";
import MoveImage from "../../../assets/images/MoveImage.svg";
import Flow2 from "../../../assets/images/Flow2.svg";
import Flow3 from "../../../assets/images/Flow3.svg";
import Flow4 from "../../../assets/images/Flow4.svg";
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

export interface ToolNode {
  id: string;
  image: string;
  text: string;
  type: string;
}

export const draggableData: ToolNode[] = [
  {
    id: "1",
    image: FlowmanagerImage,
    text: "Node 1",
    type: "default",
  },
  {
    id: "2",
    image: MoveImage,
    text: "Node 2",
    type: "default",
  },
  {
    id: "3",
    image: Flow2,
    text: "Node 3",
    type: "default",
  },
  {
    id: "4",
    image: Flow3,
    text: "Node 4",
    type: "default",
  },
  {
    id: "5",
    image: Flow4,
    text: "Node 5",
    type: "default",
  },
];
export const ToolSideBar = () => {
  const onDragStart = (event: DragEvent, node: ToolNode) => {
    event.dataTransfer.setData("reactFlow/image", node.image);
    event.dataTransfer.setData("reactFlow/text", node.text);
    event.dataTransfer.setData("reactFlow/type", node.type);
    event.dataTransfer.setData("reactFlow/id", node.id);
  };
  return (
    <div className="toolbox">
      <div className="toolbox-title">
        <p>Menu Title</p>
        <img src={CreateProjectImage} style={{ cursor: "pointer" }} />
      </div>
      <div className="toolbox-body">
        <ul>
          {draggableData.map((item, i) => (
            <li
              className="niq-node"
              key={i}
              onDragStart={(event: DragEvent) => onDragStart(event, item)}
              draggable
            >
              <DragIndicatorIcon color="primary"/>
              <img className="tooboxicon" src={item.image} />
              {item.text}
            </li>
          ))}
          <span className="seemore">
            <i></i>
          </span>
        </ul>
        <div className="toolbox-footer">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className="button"
          >
            <span className="button-text">SEE ALL</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
