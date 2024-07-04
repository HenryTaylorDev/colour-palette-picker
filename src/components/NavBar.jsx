import { Button, Link } from "@mui/material";
import '../index.css';
import './styles/components.scss';


const NavBar = () => (
    <nav className='nav'>
        <ul className="nav__buttons">
            <li>
                <Button variant="outlined">
                    <Link className="nav__link" underline="none" href="/">Home</Link>
                    <Link></Link>
                </Button>
            </li>
            <li>
                <Button variant="outlined">
                    <Link className="nav__link" underline="none" href="/trending">Trending</Link>
                </Button>
            </li>
        </ul>
    </nav>
);

export default NavBar;