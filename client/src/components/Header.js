import NavBar from "./NavBar";
import Logo from "../assets/Logo.png";
const Header = () => {
  return (
    <header className="bg-black">
      <div className="flex items-center max-w-6xl my-0 mx-auto py-2 px-5">
        <a href="/">
          <img src={Logo} />
        </a>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
