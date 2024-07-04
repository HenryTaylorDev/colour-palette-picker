import { useState } from "react";
import LockIcon from "@mui/icons-material/Lock";
import "./styles/components.scss";
import ColourToolbar from "./ColourToolbar";

function Colour({
  colour,
  textColor,
  isLocked,
  copyToClipBoard,
  addColourBar,
  removeColourBar,
  colourBar,
  toggleLock,
  index,
}) {
  const [toolsVisible, setToolsVisible] = useState(false);
  const toggleToolsView = () => {
    setToolsVisible((prevState) => !prevState);
  };

  return (
    <>
      <div style={{ backgroundColor: colour }} className="colour">
        <div className="colour__content">
          <h2 className="colour__hex-code" style={{ color: textColor }}>
            {colour}
          </h2>
          <div className="colour__actions" onMouseEnter={toggleToolsView}>
            {toolsVisible ? (
              <div className="colour__tools" onMouseLeave={toggleToolsView}>
                <ColourToolbar
                  onAddColourBar={addColourBar}
                  handleRemove={() => removeColourBar(colourBar.id)}
                  isLocked={colourBar.locked}
                  toggleLock={() => toggleLock(colourBar.id)}
                  copyToClipBoard={copyToClipBoard}
                  index={index}
                  textColor={textColor}
                  colour={colour}
                />
              </div>
            ) : (
              <div className="colour__hover"></div>
            )}
          </div>
          <div className="colour__lock-icon">
            {isLocked && <LockIcon style={{ color: textColor }} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Colour;
