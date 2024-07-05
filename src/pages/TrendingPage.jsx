import './styles/pages.scss';
import '../index.css';

import ColourPalette from "../components/ColourPalette";
import Header from "../components/Header";
import colorPalettes from "../data/colourPalettes";

export default function TrendingPage({ paletteSelected }) {
    return (
        <>
            <Header text="Choose from popular colour palettes" />
            <div className="palettes">
                {colorPalettes.map((palette, i) => (
                    <div key={i}>
                        <ColourPalette
                            palette={palette.colours}
                            paletteName={palette.name}
                            paletteSelected={paletteSelected}
                        />
                    </div>
                ))}
            </div>
        </>
    );
  }