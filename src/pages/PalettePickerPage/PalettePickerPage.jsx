import Header from "../../components/Header";
import PaletteContainer from "./components/PaletteContainer";

export default function PalettePickerPage({
  generatePopularPalette,
  colourBars,
  addColourBar,
  removeColourBar,
  isDarkBackground,
  copyToClipBoard,
  toggleLock,
}) {
  return (
    <>
      <Header
        text="Hit spacebar to generate colour palettes"
        generatePopularPalette={generatePopularPalette}
      />
      <PaletteContainer
        colourBars={colourBars}
        addColourBar={addColourBar}
        removeColourBar={removeColourBar}
        isDarkBackground={isDarkBackground}
        toggleLock={toggleLock}
        copyToClipBoard={copyToClipBoard}
      />
    </>
  );
}
