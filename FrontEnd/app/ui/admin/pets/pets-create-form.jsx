"use client";
import { useRef, useState } from "react";
import { createPetAction, validatePetSubmit } from "@/app/lib/admin/actions";

function PetsCreateForm({ refuges }) {
  const [submitErrors, setSubmitErrors] = useState(null);
  const [featured, setFeatured] = useState(false);
  const formRef = useRef(null);

  const submitPet = async (formData) => {
    const submitValidation = await validatePetSubmit(formData);
    //console.log(submitValidation);
    setSubmitErrors(submitValidation);
    if (submitValidation.success) {
      const createPet = await createPetAction(formData);
      setSubmitErrors(createPet);
      if (createPet?.success) {
        console.log("Clear form");
        formRef.current?.reset();
      }
    }
  };

  const handleFeaturedChange = () => {
    setFeatured(!featured);
  };

  return (
    <form
      ref={formRef}
      action={submitPet}
      className="pl-4 h-auto w-full mt-10 ml-2 p-10 bg-slate-100 rounded-3xl"
    >
      <div className="pb-5">
        <label
          htmlFor="nombre"
          className="mt-6 block text-sm font-medium text-gray-700"
        >
          Nombre:
        </label>
        <input
          id="nombre"
          name="nombre"
          className="border border-gray-700 mt-1 block w-1/3 rounded-md bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {submitErrors?.errors.nombre && (
          <span className="text-sm text-red-500">
            {submitErrors?.errors.nombre}
          </span>
        )}
      </div>

      <div className="pb-5">
        <label
          htmlFor="tipo"
          className="block text-sm font-medium text-gray-700"
        >
          Tipo:
        </label>
        <select
          name="tipo"
          className="mt-1 block w-1/3 rounded-md border border-gray-700 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="1" selected>
            Gato
          </option>
          <option value="2">Perro</option>
        </select>
        {submitErrors?.errors.tipo && (
          <span className="text-sm text-red-500">
            {submitErrors?.errors.tipo}
          </span>
        )}
      </div>

      <div className="h-36 pb-0">
        <label
          htmlFor="descripcion"
          className="flex text-sm font-medium text-gray-700"
        >
          Descripción:
        </label>
        <textarea
          id="descripcion"
          name="descripcion"
          className="mt-1 block w-2/3 rounded-md border border-gray-700 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm resize-none"
          rows="4"
        />
        {submitErrors?.errors.descripcion && (
          <span className="text-sm text-red-500">
            {submitErrors?.errors.descripcion}
          </span>
        )}
      </div>

      <div className="pb-5">
        <label
          htmlFor="raza"
          className="block text-sm font-medium text-gray-700"
        >
          Raza:
        </label>
        <input
          id="raza"
          name="raza"
          className="mt-1 block w-1/3 rounded-md border border-gray-700 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {submitErrors?.errors.raza && (
          <span className="text-sm text-red-500">
            {submitErrors?.errors.raza}
          </span>
        )}
      </div>

      <div className="pb-5">
        <label
          htmlFor="peso"
          className="block text-sm font-medium text-gray-700"
        >
          Peso:
        </label>
        <input
          id="peso"
          name="peso"
          className="mt-1 block w-24 rounded-md border border-gray-700 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          type="number"
        />
        {submitErrors?.errors.peso && (
          <span className="text-sm text-red-500">
            {submitErrors?.errors.peso}
          </span>
        )}
      </div>

      <div className="pb-5">
        <label
          htmlFor="edad"
          className="block text-sm font-medium text-gray-700"
        >
          Edad:
        </label>
        <input
          id="edad"
          name="edad"
          className="mt-1 block w-16 rounded-md border border-gray-700 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {submitErrors?.errors.edad && (
          <span className="text-sm text-red-500">
            {submitErrors?.errors.edad}
          </span>
        )}
      </div>

      <div className="pb-5">
        <label
          htmlFor="sexo"
          className="block text-sm font-medium text-gray-700"
        >
          Sexo:
        </label>
        <select
          name="sexo"
          className="mt-1 block w-auto rounded-md border border-gray-700 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="M" selected>
            Macho
          </option>
          <option value="F">Hembra</option>
        </select>
        {submitErrors?.errors.sexo && (
          <span className="text-sm text-red-500">
            {submitErrors?.errors.sexo}
          </span>
        )}
      </div>

      <div className="pb-5">
        <label
          htmlFor="img_home_principal"
          className="block text-sm font-medium text-gray-700"
        >
          Imagen 1:
        </label>
        <input
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          id="img_home_principal"
          name="img_home_principal"
          className="mt-1 block w-auto rounded-md border border-gray-700 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {submitErrors?.errors.img_home_principal && (
          <span className="text-sm text-red-500">
            {submitErrors?.errors.img_home_principal}
          </span>
        )}
      </div>

      <div className="pb-5">
        <label
          htmlFor="img_print_mascota"
          className="block text-sm font-medium text-gray-700"
        >
          Imagen 2:
        </label>
        <input
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          id="img_print_mascota"
          name="img_print_mascota"
          className="mt-1 block w-auto rounded-md border border-gray-700 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {submitErrors?.errors.img_print_mascota && (
          <span className="text-sm text-red-500">
            {submitErrors?.errors.img_print_mascota}
          </span>
        )}
      </div>

      <div className="pb-4">
        <label htmlFor="estatus" className="pr-4 ">
          Estado:
        </label>
        <select name="estatus">
          <option value="1" selected>
            Nuevo
          </option>
          <option value="2" selected>
            Adoptado
          </option>
        </select>
        {submitErrors?.errors.estatus && (
          <span className="text-sm text-red-500">
            {submitErrors?.errors.estatus}
          </span>
        )}
      </div>

      <div className="pb-4">
        <label htmlFor="destacada" className="pr-4">
          Destacada:
        </label>
        <input
          type="checkbox"
          id="destacada"
          name="destacada"
          value={featured}
          onChange={handleFeaturedChange}
        />
        {submitErrors?.errors.destacada && (
          <span className="text-sm text-red-500">
            {submitErrors?.errors.destacada}
          </span>
        )}
      </div>

      <div className="pb-4">
        <label htmlFor="fecha_refugio" className="pr-4">
          Fecha llegada:
        </label>
        <input
          className="border border-gray-700"
          type="date"
          name="fecha_refugio"
        />
        {submitErrors?.errors.fecha_refugio && (
          <span className="text-sm text-red-500">
            {submitErrors?.errors.fecha_refugio}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="id_refugio" className="pr-4">
          Refugio:
        </label>
        <select name="id_refugio">
          <option value={`${refuges?.id}`} selected>
            {refuges?.[0]?.name}
          </option>
          {refuges?.map((refuge) => {
            return (
              <option key={refuge.id} value={`${refuge.id}`}>
                {refuge.name}
              </option>
            );
          })}
        </select>
        {submitErrors?.errors.id_refugio && (
          <span className="text-sm text-red-500">
            {submitErrors?.errors.id_refugio}
          </span>
        )}
      </div>

      <div className="flex justify-center mt-4 pb-10">
        <button
          type="submit"
          className="bg-bgButton w-1/5 hover:bg-[#F2D6B3] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}

export default PetsCreateForm;
