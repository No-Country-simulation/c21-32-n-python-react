"use client";
import { credentialsAction, validateSignInForm } from "@/app/lib/login/actions";
import { CredentialsSignin } from "next-auth";
import { useState } from "react";

export default function LoginForm() {
  const [submitErrors, setSubmitErrors] = useState(null);

  const signInAction = async (formData) => {
    const validationResponse = await validateSignInForm(formData);
    //console.log(isValidated);
    setSubmitErrors(validationResponse);
    if (validationResponse.success) {
      const siginResponse = await credentialsAction(formData);
      if (!siginResponse.success) {
        setSubmitErrors(siginResponse);
      }
    }
  };

  return (
    <form
      action={(formData) => {
        signInAction(formData);
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
          {submitErrors?.errors?.email && (
            <span className="text-sm text-red-800">
              {submitErrors.errors.email}
            </span>
          )}
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
        {submitErrors?.errors?.password && (
          <span className="text-sm text-red-800">
            {submitErrors.errors.password}
          </span>
        )}
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-gradient-to-r from-red-500 to-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#faa16e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24AFB5]"
        >
          Sign in
        </button>
      </div>
      {submitErrors?.errors?.signIn && (
        <span className="text-sm text-red-800">
          {submitErrors.errors.signIn}
        </span>
      )}
      <div className="text-sm">
        <a
          href="#"
          className="font-semibold text-[#3b83a4] hover:text-[#448aaa]"
        >
          ¿Olvidaste tu contraseña?
        </a>
      </div>
    </form>
  );
}
