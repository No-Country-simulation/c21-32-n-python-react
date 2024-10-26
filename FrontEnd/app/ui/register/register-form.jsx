"use client";
import { registerAction } from "@/app/lib/register/actions";
import clsx from "clsx";
import { redirect } from "next/navigation";
import { useState, useTransition } from "react";
import { v4 as uuid } from "uuid";

export default function RegisterForm() {
  const [isPending, startRegister] = useTransition();
  const [registerResponse, setRegisterResponse] = useState(null);

  const formAction = async (formData) => {
    startRegister(async () => {
      const responseAction = await registerAction(formData);
      setRegisterResponse(responseAction);
      if (responseAction.status === 201) {
        redirect(`/register/success/${uuid()}`);
      }
    });
  };

  return (
    <form action={formAction} className="space-y-6">
      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Nombre completo
        </label>
        <div className="mt-2">
          <input
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#207198] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#24AFB5] sm:text-sm sm:leading-6"
            id="name"
            name="name"
            type="text"
            required
            autoComplete="firstName"
          />
        </div>
        {registerResponse?.fieldErrors?.name && (
          <span className="text-xs text-red-800">
            {registerResponse.fieldErrors.name[0]}
          </span>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Apellido
        </label>
        <div className="mt-2">
          <input
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#207198] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#24AFB5] sm:text-sm sm:leading-6"
            id="lastname"
            name="lastname"
            type="text"
            required
            autoComplete="lastName"
          />
          {registerResponse?.fieldErrors?.lastname && (
            <span className="text-xs text-red-800">
              {registerResponse.fieldErrors.lastname[0]}
            </span>
          )}
        </div>
      </div>
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
        {registerResponse?.fieldErrors?.email && (
          <span className="text-xs text-red-800">
            {registerResponse.fieldErrors.email[0]}
          </span>
        )}
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
        {registerResponse?.fieldErrors?.password && (
          <span className="text-xs text-red-800">
            {registerResponse.fieldErrors.password[0]}
          </span>
        )}
      </div>

      <div>
        <button
          disabled={isPending}
          type="submit"
          className={clsx(
            "flex w-full justify-center rounded-md bg-gradient-to-r   px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24AFB5]",
            !isPending && "from-red-500 to-orange-500 hover:bg-[#faa16e] "
          )}
        >
          Sign in
        </button>
      </div>
      {registerResponse?.status && registerResponse.status !== 201 && (
        <span className="text-xs text-red-800">Usuario existente</span>
      )}
      
    </form>
  );
}
