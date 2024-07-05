import "./styles/components.scss";
import NavBar from "./NavBar";
import Logo from "../assets/logo.png";

const Header = ({ text }) => (
  <div className="header">
    <div className="header__content">
      <img className="header__logo" src={Logo} alt="logo" />
      <p className="header__subtitle">{text}</p>
    </div>
    <NavBar />
  </div>
);

export default Header;
