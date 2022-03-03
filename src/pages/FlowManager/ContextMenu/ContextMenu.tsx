import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MoreImage from 'src/assets/images/MoreImage.svg';
import DeleteFlowImage from 'src/assets/images/DeleteFlowImage.svg';
import "./ContextMenu.less";
import {
  ClickAwayListener,
  Grow,
  IconButton,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  onDelete?: () => void;
  onAction?: (type: "input" | "output" | "default") => void;
}

export const ContextMenu: React.FC<Props> = ({ onDelete, onAction }) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
    <div>
      <IconButton
        ref={anchorRef}
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        className="morehorizontal-icon"
      >
        <MoreHorizIcon />
      </IconButton>
      <Popper
        open={open}
        anchorEl={anchorRef?.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem
                    onClick={() => {
                      onAction?.("input");
                    }}
                  >
                    Input
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      onAction?.("output");
                    }}
                  >
                    Output
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      onAction?.("default");
                    }}
                  >
                    Default
                  </MenuItem>
                  <MenuItem onClick={onDelete}>
                    <img src={DeleteFlowImage} style={{float:'right'}}/>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};
