import Navbar from "./Navbar";
import Logo from "../assets/Logo.png";
const Header = () => {
  return (
    <header className="header">
      <div className="nav-area">
        <a href="/">
          <img src={Logo} />
        </a>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
