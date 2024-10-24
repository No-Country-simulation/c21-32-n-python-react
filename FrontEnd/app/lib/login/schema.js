import { object, string } from "zod";

export const signInSchema = object({
  email: string({ required_error: "Email es requerido" })
    .min(1, "Email no puede estar vacio")
    .email("Email invalido"),
  password: string({ required_error: "Password es requerido" })
    .min(1, "El password no puede estar vacio")
    .min(8, "Password debe tener más de 8 caracteres")
    .max(32, "Password debe tener menos de 32 caracteres"),
});
