import { any, nativeEnum, object, string } from "zod";

/*****************PETS*******************/

export const petCreateSchema = object({
  nombre: string({ required_error: "Nombre es requerido" })
    .min(1, "Nombre no puede estar vacio")
    .max(50, "El nombre debe ser menor a 30 caracteres"),
  tipo: any().refine(
    (number) => typeof parseInt(number) === "number",
    "Se necesita un numero valido"
  ),
  descripcion: string({ required_error: "Descripcion es requerido" }).min(
    1,
    "Descripcion no puede estar vacio"
  ),
  raza: string({ required_error: "Raza es requerido" }).min(
    1,
    "Raza no puede estar vacio"
  ),
  peso: string({ required_error: "Peso es requerido" }).min(
    1,
    "Peso no puede estar vacio"
  ),
  edad: any().refine(
    (number) => typeof parseInt(number) === "number",
    "Se necesita un numero valido"
  ),
  sexo: nativeEnum[("F", "M")],
  img_home_principal: any()
    .refine((file) => file?.size > 0, "Archivo es requerido")
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
  img_print_mascota: any()
    .refine((file) => file?.size > 0, "Archivo es requerido")
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
  estatus: string({ required_error: "Estatus es requerido" }).min(
    1,
    "Estatus no puede estar vacio"
  ),
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
    (number) => typeof parseInt(number) === "number",
    "Se necesita un numero valido"
  ),
  coordx: any().refine(
    (number) => typeof parseInt(number) === "number",
    "Se necesita un numero valido"
  ),
  mision: string({ required_error: "Esta campo no puede estar vacio" })
    .min(1)
    .max(200),
  vision: string({ required_error: "Esta campo no puede estar vacio" })
    .min(1)
    .max(200),
});
