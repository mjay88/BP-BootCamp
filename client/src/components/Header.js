import NavBar from "./NavBar";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext/index";
import { useEffect, useState } from "react";
import { API } from "../utils/API";

const Header = () => {
  const { logout, user } = useAuth();
  const [currentUser, setCurrentUser] = useState("");

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

  useEffect(() => {
    console.log(user.uid);

    if (user) {
      API.getUser(user.uid).then((res) => {
        setCurrentUser(res.data[0].userName);
      });
    }
  }, [user]);

  useEffect(() => {
    console.log(currentUser, "currentUser");
  }, [currentUser]);

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

        {/* <div className="text-white">{user ? user.displayName : ""}</div> */}
        <div className="text-white">
          {currentUser.length > 0 ? currentUser : ""}
        </div>
      </div>
    </header>
  );
};

export default Header;
