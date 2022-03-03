import React, { useState, useRef, DragEventHandler, useCallback } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  getConnectedEdges,
  Controls,
  Background,
  MiniMap,
  OnLoadFunc,
  OnLoadParams,
  Elements,
  Edge,
  Connection,
  BackgroundVariant,
  isEdge,
  removeElements,
  useZoomPanHelper,
  FlowElement,
} from "react-flow-renderer";
import ContextMenu from "../ContextMenu";
import { draggableData } from "../ToolSideBar/ToolSideBar";
import "./TabContainer.less";
const initialElements = [
  {
    id: "1",
    type: "input",
    data: { label: "input node" },
    position: { x: 250, y: 5 },
  },
];
export const TabContainer = () => {
  const reactFlowWrapper: React.LegacyRef<HTMLDivElement> = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] =
    useState<OnLoadParams<any>>();
  const [elements, setElements] = useState<Elements>([]);
  const onConnect = (params: Edge | Connection) =>
    setElements((els: any) => addEdge(params, els));

  const onLoad: OnLoadFunc<any> = (_reactFlowInstance) =>
    setReactFlowInstance(_reactFlowInstance);

  const onDragOver = (event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const handleDelete = (id: any, elementList: Elements<any>) => {
    setElements((elms: Elements<any>) =>
      elms.filter((element) => element.id != id)
    );
  };

  const changeType = (id: string, type: string) => {
    setElements((elms) =>
      elms.map((el) => {
        return {
          ...el,
          type: id == el.id ? type : el.type,
        };
      })
    );
  };
  const onElementsRemove = (elementsToRemove: Elements<any>) => {
    setElements((els) => removeElements(elementsToRemove, els));
  };
  const addNode = (
    toolId: string,
    type: string,
    position: { x: number; y: Number },
    text: string,
    image: string
  ) => {
    const id = `${new Date().valueOf()}`;
    return {
      id,
      type,
      position,
      selectable: true,
      toolId: toolId,
      data: {
        label: (
          <div className="niq-node">
            <img className="tooboxicon" src={image} />
            
            <ContextMenu
              onDelete={() => {
                handleDelete(id, elements);
              }}
              onAction={(type) => {
                changeType(id, type);
              }}
            />
          </div>
        ),
      },
    };
  };
  const onDrop = (event: any) => {
    event.preventDefault();
    if (reactFlowWrapper?.current && reactFlowInstance) {
      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const image = event.dataTransfer.getData("reactFlow/image");
      const text = event.dataTransfer.getData("reactFlow/text");
      const type = event.dataTransfer.getData("reactFlow/type");
      const id = event.dataTransfer.getData("reactFlow/id");
      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      if (image && type && text) {
        const newNode = addNode(id, type, position, text, image);
        setElements((es: any) => es.concat(newNode));
      }
    }
  };
  const onSave = useCallback(() => {
    if (reactFlowInstance) {
      const flow = reactFlowInstance.toObject();
      flow.elements = flow.elements.map((x) => {
        delete x.data;
        return x;
      });
      localStorage.setItem("flowKey", JSON.stringify(flow));
    }
  }, [reactFlowInstance]);

  const onRestore = useCallback(() => {
    const restoreFlow = async () => {
      const flow = JSON.parse(localStorage.getItem("flowKey") ?? "");

      if (flow) {
        const [x = 0, y = 0] = flow.position;
        const nodes = [];
        flow.elements = flow.elements.map((x: any) => {
          const item = draggableData.find((t) => t.id == x.toolId);
          x.data = {
            label: (
              <div className="niq-node">
                <img className="tooboxicon" src={item?.image} />
               
                <ContextMenu
                  onDelete={() => {
                    handleDelete(x.id, elements);
                  }}
                  onAction={(type) => {
                    changeType(x.id, type);
                  }}
                />
              </div>
            ),
          };
          return x;
        });
        setElements(flow.elements || []);
      }
    };

    restoreFlow();
  }, [setElements]);
  return (
    <div style={{ width: "100%" }}>
      <button onClick={onSave}>save</button>
      <button onClick={onRestore}>restore</button>

      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            elements={elements ?? []}
            onConnect={onConnect}
            elementsSelectable={true}
            onLoad={onLoad}
            deleteKeyCode={46}
            style={{ width: "100%", height: "90vh" }}
            onElementsRemove={onElementsRemove}
            onDrop={onDrop}
            onDragOver={onDragOver}
          >
            <MiniMap nodeBorderRadius={2} />
            <Controls />
            <Background
              variant={BackgroundVariant.Dots}
              color="rgba(255, 255, 255, 0.4)"
              gap={20}
              size={0.8}
            />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
};
