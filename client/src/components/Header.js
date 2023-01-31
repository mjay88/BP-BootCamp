import NavBar from "./NavBar";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext/index";
import { useEffect, useState } from "react";
import { API } from "../utils/API";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
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

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		console.log("timer");
	// 		API.updateUser({ updatingUserName: true, uid: user.uid, name: "Mikey" });
	// 	}, 3000);
	// }, []);

	useEffect(() => {
		console.log(currentUser, "currentUser");
	}, [currentUser]);

	return (
		<header className="bg-black">
			<div className="flex items-center justify-evenly max-w-full my-0 mx-auto py-2 px-2">
				<div className="flex-none ml-5">
					<img src={Logo} />
				</div>
				{/* <NavBar /> */}
				<div className="flex-1 hidden md:block lg:block">
					<Navigation />
				</div>

				<div className="lg:hidden md:hidden">
					<MobileNavigation />
				</div>

				<div className="hidden md:flex flex-row items-center mr-10 lg:flex flex-row items-center mr-10">
					<button
						className="mb-1 text-xl text-white font-bold duration-300 hover:scale-105 hover:border-b-4 border-orange-400"
						onClick={handleLogOut}
					>
						Logout
					</button>

					{/* <div className="text-white">{user ? user.displayName : ""}</div> */}
					<div className="text-white px-1 pl-3">
						{currentUser.length > 0 ? currentUser : ""}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
