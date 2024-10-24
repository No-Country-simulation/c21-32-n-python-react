"use server";
import { signIn } from "@/auth";
import { signInSchema } from "./schema";
import { CredentialsSignin } from "next-auth";

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
  try {
    await signIn("credentials", formData);
  } catch (error) {
    return {
      success: false,
      errors: { signIn: "Credenciales invalidas" },
    };
  }
};
