import React from "react";

function Authbox({ register }) {
  return (
    <main class="relative min-h-screen w-full bg-black">
      {/* component */}
      <div class="p-6" x-data="app">
        {/* header */}
        <header class="flex w-full justify-end">
          {/* buttons */}
          <div>
            {/*@click="isLoginPage = false" */}
            {register && (
              <button
                type="button"
                x-show="isLoginPage"
                class="transform rounded-md bg-orange-400/95 px-5 py-3 font-medium text-black-400 transition-colors hover:bg-orange-50"
              >
                LOGIN
              </button>
            )}

            {/*@click="isLoginPage = true"*/}
            <button
              type="button"
              x-show="!isLoginPage"
              class="transform rounded-md bg-orange-400/95 px-5 py-3 font-medium text-black-400 transition-colors hover:bg-orange-50 active:translate-y-[0.125rem]"
            >
              SIGN UP
            </button>
          </div>
        </header>

        <section class="absolute top-1/2 left-1/2 mx-auto max-w-sm -translate-x-1/2 -translate-y-1/2 transform space-y-4 text-center">
          {/* register content */}
          {register && (
            <div x-show="isLoginPage" class="space-y-4">
              <header class="mb-3 text-2xl font-bold">
                Create your profile
              </header>

              <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                <input
                  type="text"
                  placeholder="username"
                  class="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                />
              </div>

              <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                <input
                  type="text"
                  placeholder="email"
                  class="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                />
              </div>
              <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                <input
                  type="password"
                  placeholder="password"
                  class="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                />
              </div>
              <button class="w-full rounded-2xl border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400">
                CREATE ACCOUNT
              </button>
            </div>
          )}
          ;{/* login content */}
          <div x-show="!isLoginPage" class="space-y-4">
            <header class="mb-3 text-2xl font-bold">Log in</header>
            <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
              <input
                type="text"
                placeholder="Email"
                class="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
              />
            </div>
            <div class="flex w-full items-center space-x-2 rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
              <input
                type="password"
                placeholder="Password"
                class="my-3 w-full border-none bg-transparent outline-none"
              />
              <a href="#" class="font-medium text-gray-400 hover:text-gray-500">
                FORGOT?
              </a>
            </div>
            <button class="w-full rounded-2xl bg-orange-400/95 py-3 font-bold text-black-400 transition-colors hover:bg-orange-50 active:translate-y-[0.125rem] ">
              LOG IN
            </button>
          </div>
          <div class="flex items-center space-x-4">
            <hr class="w-full border border-gray-300" />
            <div class="font-semibold text-gray-400">OR</div>
            <hr class="w-full border border-gray-300" />
          </div>
          <footer>
            <div class="grid grid-cols-2 gap-4">
              <a
                href="#"
                class="rounded-2xl bg-orange-400/95 py-2.5 px-4 font-bold text-black-700 ring-2 ring-gray-200 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200"
              >
                FACEBOOK
              </a>
              <a
                href="#"
                class="rounded-2xl bg-orange-400/95 py-2.5 px-4 font-bold text-black-700 ring-2 ring-gray-200 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200"
              >
                GOOGLE
              </a>
            </div>

            <div class="mt-8 text-sm text-gray-400">
              By signing in to barrelproofbootcamp.com Ⓒ you agree to our{" "}
              <a href="#" class="font-medium text-gray-500">
                Terms
              </a>{" "}
              and{" "}
              <a href="#" class="font-medium text-gray-500">
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

export default Authbox;
