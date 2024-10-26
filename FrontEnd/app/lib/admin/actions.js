/*****************PETS*******************/

import { createRefuge } from "../data";
import { refugeCreateSchema } from "./schemas";

export const validatePetSubmit = async (formData) => {
  const dataEntries = Object.fromEntries(formData);
  const validation = signInSchema.safeParse(dataEntries);
  if (!validation.success) {
    //console.log(validation.error.flatten().fieldErrors);
    return { success: false, errors: validation.error.flatten().fieldErrors };
  }
  return { success: true, errors: {} };
};

export const createPetAction = async (formData) => {};

/*****************REFUGES*******************/

export const validateRefugeSubmit = async (formData) => {
  const dataEntries = Object.fromEntries(formData);
  const validation = refugeCreateSchema.safeParse(dataEntries);

  if (!validation.success) {
    //console.log(validation.error.flatten().fieldErrors);
    return { success: false, errors: validation.error.flatten().fieldErrors };
  }
  //console.log("Validation success");
  return { success: true, errors: {} };
};

export const createRefugeAction = async (formData) => {
  try {
    const resp = await createRefuge(formData);
    if (resp?.status === 201) {
      return { success: true, errors: {} };
    }
  } catch (error) {
    console.log(error);
  }
};
