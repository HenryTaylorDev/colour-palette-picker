import './styles/components.scss';
import NavBar from './NavBar';


const Header = ({ text }) => (
    <div className="header">
        <h1 className="header__title">{text}</h1>
        <NavBar />
    </div>
);

export default Header;
