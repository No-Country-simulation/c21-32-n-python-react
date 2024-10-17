import React from "react";

export default function register() {
  return (
    <div className="w-full bg-[#d9d9d9] h-full divide-x divide-black">
        <div className="flex justify-between h-full ">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
                alt="Cat"
                src="/images/cat.jpeg"
                className=" size-full"
              />
            </div>
              <hr className="w-[2px] h-[130vh] bg-black border-[1px]"/>
            <div className="mt-20 sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-5 text-left text-2xl font-bold leading-9 tracking-tight text-[#0e4a67]">
                Register
              </h2>
              <p className="mb-5 text-left text-sm text-gray-500">
              ¿Ya tienes cuenta?{' '}
                <a href="/login" className="font-semibold leading-6 text-[#fd8d53] hover:text-[#faa16e]">
                  Inicia Sesión
                </a>
              </p>
              <form action="#" method="POST" className="space-y-6">
                  <div>

                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Nombre completo
                      </label>
                      <div className="mt-2">
                        <input
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#207198] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#24AFB5] sm:text-sm sm:leading-6"
                          id="firstName"
                          type="text"
                          required
                          autoComplete="firstName"
                        />
                      </div>
                  </div>
                  <div>
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Apellido
                      </label>
                    <div className="mt-2">
                      <input
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#207198] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#24AFB5] sm:text-sm sm:leading-6"
                        id="lastName"
                        type="text"
                        required
                        autoComplete="lastName"
                      />
                    </div>
                  </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
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
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
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
                      <a href="#" className="font-semibold text-[#3b83a4] hover:text-[#448aaa]">
                        ¿Olvidaste tu contraseña?
                      </a>
                    </div>
              </form>
            </div>
        </div>
      </div>
  );
}
