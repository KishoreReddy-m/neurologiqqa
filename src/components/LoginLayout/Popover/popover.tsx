import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { Icon, List, ListItemText } from "@mui/material";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
export const MouseOverPopover = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Icon
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <QuestionMarkIcon />
      </Icon>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>
          <List>
            <ListItemText>should contain at least one digit</ListItemText> <ListItemText>should contain at least one lower
            case</ListItemText> <ListItemText>should contain at least one upper case</ListItemText> <ListItemText>should contain at least
            8 from the mentioned characters</ListItemText>
          </List>
        </Typography>
      </Popover>
    </div>
  );
};
