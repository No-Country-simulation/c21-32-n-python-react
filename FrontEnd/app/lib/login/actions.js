//FUNCIONES ESPECIFICAS PARA LOGIN
import { signIn } from "@/auth";

export const credentialsAction = (formData) => {
  signIn("credentials", formData);
};
