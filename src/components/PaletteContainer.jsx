import Colour from './Colour';
import './styles/components.scss';

function PaletteContainer({ colourBars, addColourBar, removeColourBar, isDarkBackground, toggleLock }) {

    const copyToClipBoard = (selectedColour) => {
        navigator.clipboard.writeText(selectedColour);
    };

    return (
        <div className="picker">
            {colourBars.map((colourBar, index) => (
                <div key={colourBar.id} className='picker__container'>
                    <Colour
                        colour={colourBar.colour}
                        textColor={isDarkBackground(colourBar.colour) ? 'white' : 'black'}
                        isLocked={colourBar.locked}
                        copyToClipBoard={copyToClipBoard}
                        addColourBar={addColourBar}
                        colourBar={colourBar}
                        removeColourBar={removeColourBar}
                        toggleLock={() => toggleLock(colourBar.id)}
                    />
                </div>
            ))}
        </div>
    );
}

export default PaletteContainer;
