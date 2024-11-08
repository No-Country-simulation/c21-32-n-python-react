import { signIn } from "@/auth";
import { redirect } from "next/dist/server/api-utils";
import React from "react";

export default function LoginPage() {
  return (
    <div className="w-full bg-[#d9d9d9] h-full divide-x divide-black">
      <div className="flex justify-between h-full ">
        <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Dog"
            src="/images/logo.jpg"
            className="rounded-[100px] bg-transparent ml-10 mt-[13em]"
          />
        </div>
        <hr className="w-[2px] h-[100vh] bg-black border-[1px]" />
        <div className="mt-20 sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-5 text-left text-2xl font-bold leading-9 tracking-tight text-[#0e4a67]">
            Login
          </h2>
          <p className="mb-5 text-left text-sm text-gray-500">
            ¿No tienes cuenta?{" "}
            <a
              href="register"
              className="font-semibold leading-6 text-[#fd8d53] hover:text-[#faa16e]"
            >
              Crea una ahora
            </a>
          </p>
          <form
            action={async (formData) => {
              "use server";
              await signIn("credentials", formData);
            }}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#207198] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#24AFB5] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Contraseña
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#207198] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#24AFB5] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gradient-to-r from-red-500 to-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#faa16e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24AFB5]"
              >
                Sign in
              </button>
            </div>
            <div className="text-sm">
              <a
                href="#"
                className="font-semibold text-[#3b83a4] hover:text-[#448aaa]"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </form>
          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <button type="submit">Signin with Google</button>
          </form>
          <img
            alt="Dog"
            src="/images/cat.png"
            className="absolute bottom-0 left-[78%] h-[300px]"
          />
        </div>
      </div>
    </div>
  );
}
