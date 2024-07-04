import { isDarkBackground } from '../util/helper';
import './styles/components.scss';
import PaletteDropMenu from './PaletteDropMenu';

function ColourPalette({ palette, paletteName, paletteSelected }) {
    return (
        <>
            <div className="palette">
                <p>{paletteName}</p>
                <div className='palette__containter'>
                    {palette.map((colour, i) => (
                        <div key={i} className='palette__colour' style={{ backgroundColor: colour.colour }}>
                            <div className="palette__hex" >
                                <p style={{ color: (isDarkBackground(colour.colour) ? 'white' : 'black') }} >{colour.colour}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <PaletteDropMenu paletteSelected={() => paletteSelected(palette)} />
        </>
    );
}

export default ColourPalette;
