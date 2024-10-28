import { any, boolean, coerce, date, nativeEnum, object, string } from "zod";

/*****************PETS*******************/

export const petCreateSchema = object({
  nombre: string({ required_error: "Nombre es requerido" })
    .min(1, "Nombre no puede estar vacio")
    .max(50, "El nombre debe ser menor a 30 caracteres"),
  tipo: coerce.number(),
  descripcion: string({ required_error: "Descripcion es requerido" }).min(
    1,
    "Descripcion no puede estar vacio"
  ),
  raza: string().max(20),
  peso: coerce.number().gte(0),
  edad: any().refine(
    (number) => typeof parseInt(number) === "number",
    "Se necesita un numero valido"
  ),
  sexo: string().refine((sex) => sex === "M" || sex === "F", "Invalid Option"),
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
  destacada: coerce.boolean(),
  fecha_refugio: string().date(),
  id_refugio: string(),
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
