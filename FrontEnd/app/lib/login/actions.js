"use server";
import { auth, signIn } from "@/auth";
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
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof CredentialsSignin)
      return {
        success: false,
        errors: { signIn: "Credenciales invalidas" },
      };
    return {
      success: true,
      errors: {},
    };
  } finally {
    const session = await auth();
    if (session?.user) {
      if (session?.user?.isAdmin) {
        redirect("http://127.0.0.1:8000/admin/login/");
      }
      redirect("/adoption");
    }
  }
};
