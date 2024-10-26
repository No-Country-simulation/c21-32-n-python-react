"use server";

import { logInSchema } from "./schema";

export const registerAction = async (formData) => {
  try {
    const dataForm = Object.fromEntries(formData);
    const validation = logInSchema.safeParse(dataForm);
    if (validation.success) {
      const newUser = {
        ...validation.data,
        username: validation.data.name,
        is_active: true,
        is_admin: false,
      };
      const response = await fetch(
        "http://127.0.0.1:8000/api/v1/user/register/",
        {
          method: "POST",
          body: JSON.stringify(newUser),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      //console.log(response);
      return { status: response.status, message: response.statusText };
    }
    //console.log(validation.error.flatten());
    return { ...validation.error.flatten() };
  } catch (error) {
    console.log(error);
  }
};
