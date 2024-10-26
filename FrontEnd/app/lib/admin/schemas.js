import { any, number, object, string } from "zod";

/*****************PETS*******************/

export const petCreateSchema = object({
  email: string({ required_error: "Email es requerido" })
    .min(1, "Email no puede estar vacio")
    .email("Email invalido"),
  password: string({ required_error: "Password es requerido" })
    .min(1, "El password no puede estar vacio")
    .min(8, "Password debe tener más de 8 caracteres")
    .max(32, "Password debe tener menos de 32 caracteres"),
});

/*****************REFUGES*******************/
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const refugeCreateSchema = object({
  name: string({ required_error: "Nombre es requerido" })
    .min(1, "Nombre no puede estar vacio")
    .max(50, "El nombre debe ser menor a 30 caracteres"),
  dirlogo: any()
    .refine((file) => file?.size > 0, "Archivo es requerido")
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
  Horario_atencion: string().time(),
  direccion: string()
    .min(1)
    .max(50, "La direccion debe ser menor a 50 caracteres"),
  telefono: string().min(1).max(20),
  coordy: any().refine(
    (number) => !parseInt(number),
    "Se necesita un numero valido"
  ),
  coordx: any().refine(
    (number) => !parseInt(number),
    "Se necesita un numero valido"
  ),
  mision: string({ required_error: "Esta campo no puede estar vacio" })
    .min(1)
    .max(200),
  vision: string({ required_error: "Esta campo no puede estar vacio" })
    .min(1)
    .max(200),
});
