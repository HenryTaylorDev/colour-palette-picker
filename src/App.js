import { Route, Routes } from 'react-router-dom';
import PalettePickerPage from './pages/PalettePickerPage';
import TrendingPage from './pages/TrendingPage';
import { useCallback, useEffect, useState } from 'react';
import { isDarkBackground } from './util/helper';
import { getRandomIndex } from './util/getRandomIndex';
import colorPalettes from './data/colourPalettes';

function App() {
  const letters = '0123456789ABCDEF';
  const [colourBars, setColourBars] = useState([]);

  const generateRandomColour = useCallback(() => {
    let newHex = '#';
    for (let i = 0; i < 6; i++) {
      newHex += letters[Math.floor(Math.random() * 16)];
    }
    return newHex;
  }, [letters]);

  const randomizeAllColours = useCallback(() => {
    setColourBars((prevColourBars) =>
      prevColourBars.map(bar =>
        bar.locked ? bar : { ...bar, colour: generateRandomColour() }
      )
    );
  }, [generateRandomColour]);

  const handleSpacebar = useCallback((event) => {
    if (event.code === 'Space') {
      event.preventDefault(); // Prevent default spacebar behavior (like scrolling)
      randomizeAllColours();
    }
  }, [randomizeAllColours]);

  useEffect(() => {
    // Initialize with five color bars on component mount
    const initialColourBars = Array.from({ length: 5 }, (_, index) => ({
      id: index,
      colour: generateRandomColour(),
    }));
    setColourBars(initialColourBars);

    window.addEventListener('keydown', handleSpacebar);

    return () => {
      window.removeEventListener('keydown', handleSpacebar);
    };
  }, [generateRandomColour, handleSpacebar]);

  const addColourBar = useCallback((id) => {
    const newColour = generateRandomColour();
    setColourBars((prevColourBars) => {
      const newColourBars = [...prevColourBars];
      newColourBars.splice(id + 1, 0, { id: Date.now(), colour: newColour });
      return newColourBars;
    });
  }, [generateRandomColour]);

  const generatePopularPalette = () => {
    let randomIndex = getRandomIndex(colorPalettes.length)
    setColourBars(colorPalettes.colours.map(color => color[randomIndex]));
  }

  const removeColourBar = useCallback((id) => {
    setColourBars((prevColourBars) =>
      prevColourBars.filter(bar => bar.id !== id)
    );
  }, []);

  const toggleLock = useCallback((id) => {
    setColourBars((prevColourBars) =>
      prevColourBars.map(bar =>
        bar.id === id ? { ...bar, locked: !bar.locked } : bar
      )
    );
  }, []);

  const addPaletteToPicker = (palette) => {
    setColourBars(palette.map(color => color));
  }

  return (
    <div className='h-screen'>
      <Routes>
        <Route path='/' element={<PalettePickerPage
          generatePopularPalette={generatePopularPalette}
          colourBars={colourBars}
          addColourBar={addColourBar}
          removeColourBar={removeColourBar}
          isDarkBackground={isDarkBackground}
          toggleLock={toggleLock}
        
        />} />
        <Route path='/trending' element={<TrendingPage 
          paletteSelected={addPaletteToPicker} 
        />} />
      </Routes>
    </div>
  );
}

export default App;
