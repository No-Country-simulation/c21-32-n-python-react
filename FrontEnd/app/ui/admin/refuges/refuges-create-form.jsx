"use client";

import {
  createRefugeAction,
  validateRefugeSubmit,
} from "@/app/lib/admin/actions";
import React, { useRef, useState } from "react";

export default function RefugesCreateForm() {
  const [submitErrors, setSubmitErrors] = useState(null);
  const formRef = useRef(null);

  const submitRefuge = async (formData) => {
    const submitValidation = await validateRefugeSubmit(formData);
    //console.log(submitValidation);
    setSubmitErrors(submitValidation);
    if (submitValidation.success) {
      const createRefuge = await createRefugeAction(formData);
      setSubmitErrors(createRefuge);
      if (createRefuge?.success) {
        formRef.current?.reset();
      }
    }
  };

  return (
    <form
      ref={formRef}
      action={submitRefuge}
      className="pl-4 h-auto w-full mt-10 ml-2 p-10 bg-slate-100 rounded-3xl"
    >
      <div className="flex flex-col">
        <label htmlFor="name" className="text-gray-700 font-medium">
          Nombre:
        </label>
        <input
          id="name"
          name="name"
          className="border border-gray-700 rounded-md w-1/3 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {submitErrors?.errors?.name && (
          <span className="text-sm text-red-600">
            {submitErrors.errors.name}
          </span>
        )}
      </div>

      <div className="flex flex-col w-[30%]">
        <label htmlFor="dirlogo" className="text-gray-700 font-medium">
          Logo:
        </label>
        <input
          type="file"
          accept="image/png, image/jpg, image/jpeg, image/webp"
          id="dirlogo"
          name="dirlogo"
          className="border border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {submitErrors?.errors?.dirlogo && (
          <span className="text-sm text-red-600">
            {submitErrors.errors.dirlogo}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="Horario_atencion" className="text-gray-700 font-medium">
          Horario_atencion:
        </label>
        <input
          id="Horario_atencion"
          type="time"
          name="Horario_atencion"
          step={2}
          className="border border-gray-700 w-1/3 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {submitErrors?.errors?.Horario_atencion && (
          <span className="text-sm text-red-600">
            {submitErrors.Horario_atencion}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="direccion" className="text-gray-700 font-medium">
          Direccion:
        </label>
        <input
          id="direccion"
          name="direccion"
          className="border border-gray-700 w-1/2 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {submitErrors?.errors?.direccion && (
          <span className="text-sm text-red-600">
            {submitErrors.errors.direccion}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="telefono" className="text-gray-700 font-medium">
          Telefono:
        </label>
        <input
          id="telefono"
          name="telefono"
          className="border border-gray-700 w-[20%] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {submitErrors?.errors?.telefono && (
          <span className="text-sm text-red-600">
            {submitErrors.errors.telefono}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="coordy" className="text-gray-700 font-medium">
          Coordenada y:
        </label>
        <input
          type="number"
          id="coordy"
          name="coordy"
          className="border border-gray-700 w-[15%] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {submitErrors?.errors?.coordy && (
          <span className="text-sm text-red-600">
            {submitErrors.errors.coordy}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="coordx" className="text-gray-700 font-medium">
          Coordena x:
        </label>
        <input
          type="number"
          id="coordx"
          name="coordx"
          className="border border-gray-700 w-[15%] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {submitErrors?.errors?.coordx && (
          <span className="text-sm text-red-600">
            {submitErrors.errors.coordx}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="descripcion" className="text-gray-700 font-medium">
          Descripcion:
        </label>
        <textarea
          id="descripcion"
          name="descripcion"
          className="border border-gray-700 w-1/2 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          rows="4"
        />
        {submitErrors?.errors?.descripcion && (
          <span className="text-sm text-red-600">
            {submitErrors.errors.descripcion}
          </span>
        )}
      </div>

      <div className="flex justify-center items-center mt-5 mb-7">
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
