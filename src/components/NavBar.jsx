import { Button, Link } from "@mui/material";
import "../index.css";
import "./styles/components.scss";

const NavBar = () => (
  <nav className="nav">
    <ul className="nav__buttons">
      <li>
        <Button variant="outlined">
          <Link
            className="nav__link"
            underline="none"
            href="/colour-palette-picker"
          >
            Palette Picker
          </Link>
          <Link></Link>
        </Button>
      </li>
      <li>
        <Button variant="outlined">
          <Link
            className="nav__link"
            underline="none"
            href="/colour-palette-picker/trending"
          >
            Trending
          </Link>
        </Button>
      </li>
    </ul>
  </nav>
);

export default NavBar;
