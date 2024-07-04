import { useState } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import './styles/components.scss';
import ColourToolbar from './ColourToolbar';


function Colour({ colour, textColor, isLocked, copyToClipBoard, addColourBar, removeColourBar, colourBar, toggleLock }) {
    const [toolsVisible, setToolsVisible] = useState(false);
    const toggleToolsView = () => {
        setToolsVisible(prevState => !prevState);
    };

    return (
        <>
            <div style={{ backgroundColor: colour }} className="bar">
                <div className="bar__colour">
                    <h2 onClick={() => copyToClipBoard(colour)}
                        style={{ color: textColor }}>{colour}
                    </h2>
                    <div className='bar__actions' onMouseEnter={toggleToolsView}>
                        {
                            toolsVisible ? (
                                <div className="bar__tools" onMouseLeave={toggleToolsView}>
                                    <ColourToolbar
                                        onAddColourBar={addColourBar}
                                        handleRemove={() => removeColourBar(colourBar.id)}
                                        isLocked={colourBar.locked}
                                        toggleLock={() => toggleLock(colourBar.id)}
                                    />
                                </div>
                            ) :
                                <div className='bar__hover'>
                                </div>
                        }
                    </div>
                    <div className='bar__lock-icon'>
                        {
                            isLocked && <LockIcon />
                        }
                    </div>
                </div>
            </div >
        </>
    );
}

export default Colour;
