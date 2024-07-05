import { Route, Routes } from "react-router-dom";
import PalettePickerPage from "./pages/PalettePickerPage/PalettePickerPage";
import TrendingPage from "./pages/TrendingPage/TrendingPage";
import React, { useCallback, useEffect, useState } from "react";
import colorPalettes from "./data/colourPalettes";
import { getRandomColour } from "./util/getRandomColour";
import { getRandomIndex } from "./util/getRandomIndex";
import { Snackbar } from "@mui/material";
import { isDarkBackground } from "./util/helper";

function App() {
  const [colourBars, setColourBars] = useState([]);
  const [toastOpen, setToastOpen] = React.useState(false);

  const randomizeAllColours = useCallback(() => {
    setColourBars((prevColourBars) =>
      prevColourBars.map((bar) =>
        bar.locked ? bar : { ...bar, colour: getRandomColour() }
      )
    );
  }, []);

  const handleSpacebar = useCallback(
    (event) => {
      if (event.code === "Space") {
        event.preventDefault(); // Prevent default spacebar behavior (like scrolling)
        randomizeAllColours();
      }
    },
    [randomizeAllColours]
  );

  useEffect(() => {
    const initialColourBars = Array.from({ length: 5 }, (_, index) => ({
      id: index,
      colour: getRandomColour(),
    }));
    setColourBars(initialColourBars);

    window.addEventListener("keydown", handleSpacebar);

    return () => {
      window.removeEventListener("keydown", handleSpacebar);
    };
  }, [handleSpacebar]);

  const addColourBar = (id) => {
    console.log(id);
    const newColour = getRandomColour();

    setColourBars((prevColourBars) => {
      const newColourBars = [...prevColourBars];
      newColourBars.splice(id - 1, 0, { id: Date.now(), colour: newColour });
      return newColourBars;
    });
  };

  const generatePopularPalette = () => {
    let randomIndex = getRandomIndex(colorPalettes.length);
    setColourBars(colorPalettes.colours.map((color) => color[randomIndex]));
  };

  const removeColourBar = useCallback((id) => {
    setColourBars((prevColourBars) =>
      prevColourBars.filter((bar) => bar.id !== id)
    );
  }, []);

  const toggleLock = useCallback((id) => {
    setColourBars((prevColourBars) =>
      prevColourBars.map((bar) =>
        bar.id === id ? { ...bar, locked: !bar.locked } : bar
      )
    );
  }, []);

  const addPaletteToPicker = (palette) => {
    setColourBars(palette.map((color) => color));
  };

  const copyToClipBoard = (selectedColour) => {
    setToastOpen(true);

    navigator.clipboard.writeText(selectedColour);
  };

  const closeToast = () => {
    setToastOpen(false);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PalettePickerPage
              generatePopularPalette={generatePopularPalette}
              colourBars={colourBars}
              addColourBar={addColourBar}
              removeColourBar={removeColourBar}
              isDarkBackground={isDarkBackground}
              toggleLock={toggleLock}
              copyToClipBoard={copyToClipBoard}
            />
          }
        />
        <Route
          path="/trending"
          element={<TrendingPage paletteSelected={addPaletteToPicker} />}
        />
      </Routes>
      <Snackbar
        open={toastOpen}
        autoHideDuration={3000}
        onClose={closeToast}
        message="HEX code copied to clipboard!"
        // action={action}
      />
    </>
  );
}

export default App;
