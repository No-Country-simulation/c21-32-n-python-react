"use server";
import { signIn } from "@/auth";
import { signInSchema } from "./schema";
import { CredentialsSignin } from "next-auth";
import { redirect } from "next/navigation";

export const validateSignInForm = async (formData) => {
  const dataEntries = Object.fromEntries(formData);
  const validation = signInSchema.safeParse(dataEntries);
  if (!validation.success) {
    //console.log(validation.error.flatten().fieldErrors);
    return { success: false, errors: validation.error.flatten().fieldErrors };
  }
  return { success: true, errors: {} };
};

export const credentialsAction = async (formData) => {
  let success = false;
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof CredentialsSignin)
      return {
        success: false,
        errors: { signIn: "Credenciales invalidas" },
      };
    success = true;
    return {
      success: true,
      errors: {},
    };
  } finally {
    if (success) redirect("/adoption");
  }
};
