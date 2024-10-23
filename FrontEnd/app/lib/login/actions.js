"use server";
import { signIn } from "@/auth";
import { signInSchema } from "./schema";

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
  await signIn("credentials", formData);
};
