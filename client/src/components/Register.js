import React, { useState, useEffect } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
//useAuthProvider is a function that returns our AuthContext, AuthProvider is a container we created that wraps our app and is how we access all the firebase methods for authentication.
import { useAuth, AuthContext } from "../Contexts/AuthContext/index";
import { auth, provider } from "../firebase";

//register and login prop from landing page, if user click "register" button, navigate to Register component passing register prop (true) to conditionally render register box, if login prop true show login conditionally rendering.
function Register({ register }) {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [error, setError] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, confirmSetPassword] = useState("");
	const {
		currentUser,
		signUpWithGoogle,
		signup,
		googleSignIn,
		facebookSignIn,
	} = useAuth();

	let navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		try {
			await signup(email, password);
			navigate("/");
		} catch (err) {
			setError(err.message);
		}
	};

	// useEffect(() => {
	//   if (!currentUser) {
	//     navigate("/Landing");
	//   } else if (currentUser) {
	//     navigate("/");
	//   }
	// }, [currentUser]);

	const handleGoogleSignIn = async (e) => {
		e.preventDefault();
		try {
			console.log("signup function");
			await signUpWithGoogle();
			navigate("/Home");
		} catch (error) {
			console.log(error.message);
		}
	};

	const handleFacebookSignIn = async (e) => {
		e.preventDefault();
		try {
			await facebookSignIn();
			navigate("/");
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<main className="relative min-h-screen w-full bg-black">
			{/* component */}
			<div className="p-6" x-data="app">
				{/* header */}
				<header className="flex w-full justify-end">
					{/* buttons */}
					<div>
						<Link
							to="/Login"
							class="transform rounded-md bg-orange-400/95 px-5 py-3 font-medium text-black-400 transition-colors hover:bg-orange-50 active:translate-y-[0.125rem]"
						>
							LOGIN
						</Link>
					</div>
				</header>

				<section className="absolute top-1/2 left-1/2 mx-auto max-w-sm -translate-x-1/2 -translate-y-1/2 transform space-y-4 text-center">
					{/* register content */}
					<form onSubmit={handleSubmit}>
						<div x-show="isLoginPage" className="space-y-4">
							<header className="mb-3 text-2xl font-bold text-white">
								Create your profile
							</header>

							<div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
								<input
									type="text"
									placeholder="username"
									className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
									onChange={(e) => setUsername(e.target.value)}
								/>
							</div>

							<div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
								<input
									type="email"
									placeholder="email"
									className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
								<input
									type="password"
									placeholder="password"
									className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
							<div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
								<input
									type="password"
									placeholder="confirm password"
									className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
									onChange={(e) => confirmSetPassword(e.target.value)}
								/>
							</div>
							<button
								className="w-full rounded-2xl bg-orange-400/95 py-3 font-bold text-black-400 transition-colors hover:bg-orange-50 active:translate-y-[0.125rem]"
								type="Submit"
							>
								CREATE ACCOUNT
							</button>
						</div>
						;{/* login content */}
						<div className="flex items-center space-x-4">
							<hr className="w-full border border-gray-300" />
							<div className="font-semibold text-gray-400">OR</div>
							<hr className="w-full border border-gray-300" />
						</div>
					</form>
					<footer>
						<div className="grid grid-cols-2 gap-4">
							<a
								href="#"
								className="rounded-2xl bg-orange-400/95 py-2.5 px-4 font-bold text-black-700 ring-2 ring-gray-200 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200"
								onClick={handleFacebookSignIn}
							>
								FACEBOOK
							</a>
							<a
								href="#"
								className="rounded-2xl bg-orange-400/95 py-2.5 px-4 font-bold text-black-700 ring-2 ring-gray-200 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200"
								onClick={handleGoogleSignIn}
							>
								GOOGLE
							</a>
						</div>

						<div className="mt-8 text-sm text-gray-400">
							By signing in to barrelproofbootcamp.com Ⓒ you agree to our{" "}
							<a href="#" className="font-medium text-gray-500">
								Terms
							</a>{" "}
							and{" "}
							<a href="#" className="font-medium text-gray-500">
								Privacy Policy
							</a>
							.
						</div>
					</footer>
				</section>
			</div>
		</main>
	);
}

export default Register;
