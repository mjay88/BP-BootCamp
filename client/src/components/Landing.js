import React from "react";
import { Link } from "react-router-dom";

function Landing({ register }) {
  return (
    <div className="App">
      <section class="py-24 flex items-center min-h-screen justify-center bg-black">
        <div class="mx-auto max-w-[43rem]">
          <div class="text-center">
            <p class="text-lg font-medium leading-8 text-slate-300">
              Prepare to be learned...
            </p>
            <h1 class="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-white">
              Welcome to The Barrel Proof Boot Camp!
            </h1>
            <p class="mt-3 text-lg leading-relaxed text-slate-300">
              If you don't already have an account, you can register for one
              below 👇.
            </p>
          </div>

          <div class="mt-6 flex items-center justify-center gap-4">
            <Link
              to="/Authbox"
              class="transform rounded-md bg-orange-400/95 px-5 py-3 font-medium text-black-400 transition-colors hover:bg-orange-50"
            >
              Login
            </Link>

            <Link
              to="/Authbox"
              state={(register = true)}
              class="transform rounded-md bg-orange-400/95 px-5 py-3 font-medium text-black-400 transition-colors hover:bg-orange-50"
            >
              Register
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
