import { FaCopy, FaLock, FaLockOpen, FaMinus, FaPlus } from "react-icons/fa";

import { IconButton, Tooltip } from "@mui/material";
import "./components.scss";

const ColourToolbar = ({
  onAddColourBar,
  handleRemove,
  isLocked,
  toggleLock,
  index,
  textColor,
  copyToClipBoard,
  colour,
}) => {
  return (
    <div className="bar-buttons">
      <Tooltip title="Add New Colour">
        <IconButton
          label="Add"
          style={{ color: textColor }}
          onClick={() => onAddColourBar(index)}
        >
          <FaPlus />
        </IconButton>
      </Tooltip>

      <Tooltip title="Remove">
        <IconButton
          label="Subtract"
          style={{ color: textColor }}
          onClick={() => handleRemove()}
        >
          <FaMinus />
        </IconButton>
      </Tooltip>

      <Tooltip title="Copy">
        <IconButton
          label="Copy"
          style={{ color: textColor }}
          onClick={() => copyToClipBoard(colour)}
        >
          <FaCopy />
        </IconButton>
      </Tooltip>

      <Tooltip title="Lock Colour">
        <IconButton label="toggle lock" onClick={toggleLock}>
          {isLocked ? (
            <FaLock style={{ color: textColor }} />
          ) : (
            <FaLockOpen style={{ color: textColor }} />
          )}
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default ColourToolbar;
