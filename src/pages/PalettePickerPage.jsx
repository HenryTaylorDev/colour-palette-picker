import Header from "../components/Header";
import PaletteContainer from "../components/PaletteContainer";



export default function PalettePickerPage({ generatePopularPalette, colourBars, addColourBar, removeColourBar, isDarkBackground, toggleLock }) {
  return (
    <>
        <Header text="Press space to randomise colours" generatePopularPalette={generatePopularPalette} />
        <PaletteContainer 
            colourBars={colourBars}
            addColourBar={addColourBar}
            removeColourBar={removeColourBar}
            isDarkBackground={isDarkBackground}
            toggleLock={toggleLock}
        />
    </>
  );
}