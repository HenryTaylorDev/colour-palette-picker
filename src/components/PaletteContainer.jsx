import Colour from "./Colour";
import "./styles/components.scss";

function PaletteContainer({
  colourBars,
  addColourBar,
  removeColourBar,
  isDarkBackground,
  toggleLock,
  copyToClipBoard,
}) {
  return (
    <div className="picker">
      {colourBars.map((colourBar, index) => (
        <div key={colourBar.id} className="picker__container">
          <Colour
            colour={colourBar.colour}
            textColor={isDarkBackground(colourBar.colour) ? "white" : "black"}
            isLocked={colourBar.locked}
            addColourBar={addColourBar}
            copyToClipBoard={copyToClipBoard}
            colourBar={colourBar}
            removeColourBar={removeColourBar}
            index={index}
            toggleLock={() => toggleLock(colourBar.id)}
          />
        </div>
      ))}
    </div>
  );
}

export default PaletteContainer;
