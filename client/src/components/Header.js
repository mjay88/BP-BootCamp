import NavBar from "./NavBar";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext/index";

const Header = () => {
  const { logout, user } = useAuth();

  let navigate = useNavigate();

  const handleLogOut = async (e) => {
    e.preventDefault();
    try {
      await logout();
      navigate("/Landing");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <header className="bg-black">
      <div className="flex items-center max-w-6xl my-0 mx-auto py-2 px-5">
        <a href="/">
          <img src={Logo} />
        </a>
        <NavBar />

        <button className="text-white" onClick={handleLogOut}>
          Logout
        </button>

        <div className="text-white">{user ? user.displayName : ""}</div>
      </div>
    </header>
  );
};

export default Header;
