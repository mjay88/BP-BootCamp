import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
//useAuthProvider is a function that returns our AuthContext, AuthProvider is a container we created that wraps our app and is how we access all the firebase methods for authentication.
import { useAuth, AuthContext } from "../Contexts/AuthContext/index";
import { auth, provider } from "../firebase";

//register and login prop from landing page, if user click "register" button, navigate to Login component passing register prop (true) to conditionally render register box, if login prop true show login conditionally rendering.
function Login({ register }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const {
    currentUser,
    logout,
    signUpWithGoogle,
    signUp,
    login,
    googleSignIn,
    facebookSignIn,
  } = useAuth();

  let navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
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
              to="/Register"
              class="transform rounded-md bg-orange-400/95 px-5 py-3 font-medium text-black-400 transition-colors hover:bg-orange-50 active:translate-y-[0.125rem]"
            >
              SIGN UP
            </Link>
          </div>
        </header>

        <section className="absolute top-1/2 left-1/2 mx-auto max-w-sm -translate-x-1/2 -translate-y-1/2 transform space-y-4 text-center">
          {/* register content */}
          <form onSubmit={handleLogin}>
            ;{/* login content */}
            <div x-show="!isLoginPage" className="space-y-4">
              <header className="mb-3 text-2xl text-white font-bold">
                Log in
              </header>
              <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                <input
                  type="text"
                  placeholder="Email"
                  className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex w-full items-center space-x-2 rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                <input
                  type="password"
                  placeholder="Password"
                  className="my-3 w-full border-none bg-transparent outline-none"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <a
                  href="#"
                  className="font-medium text-gray-400 hover:text-gray-500"
                >
                  FORGOT?
                </a>
              </div>
              <button
                className="w-full rounded-2xl bg-orange-400/95 py-3 font-bold text-black-400 transition-colors hover:bg-orange-50 active:translate-y-[0.125rem]"
                type="Submit"
              >
                LOG IN
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <hr className="w-full border border-gray-300" />
              <div className="font-semibold text-gray-400">OR</div>
              <hr className="w-full border border-gray-300" />
            </div>
          </form>
          <footer>
            <div className="grid grid-cols-2 gap-4">
              <button
                className="rounded-2xl bg-orange-400/95 py-2.5 px-4 font-bold text-black-700 ring-2 ring-gray-200 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200"
                onClick={handleFacebookSignIn}
              >
                FACEBOOK
              </button>
              <button
                className="rounded-2xl bg-orange-400/95 py-2.5 px-4 font-bold text-black-700 ring-2 ring-gray-200 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200"
                onClick={handleGoogleSignIn}
              >
                GOOGLE
              </button>
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

export default Login;
