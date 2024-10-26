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
      action={(formData) => {
        submitRefuge(formData);
      }}
    >
      <div>
        <label htmlFor="name">Nombre:</label>
        <input id="name" name="name" className="" />
        {submitErrors?.errors?.name && (
          <span className="text-sm text-red-600">
            {submitErrors.errors.name}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="dirlogo">Logo:</label>
        <input
          type="file"
          accept="image/png, image/jpg, image/jpeg, image/webp"
          id="dirlogo"
          name="dirlogo"
          className=""
        />
        {submitErrors?.errors?.dirlogo && (
          <span className="text-sm text-red-600">
            {submitErrors.errors.dirlogo}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="Horario_atencion">Horario_atencion:</label>
        <input
          id="Horario_atencion"
          type="time"
          name="Horario_atencion"
          step={2}
          className=""
        />
        {submitErrors?.errors?.Horario_atencion && (
          <span className="text-sm text-red-600">
            {submitErrors.Horario_atencion}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="direccion">Direccion:</label>
        <input id="direccion" name="direccion" className="" />
        {submitErrors?.errors?.direccion && (
          <span className="text-sm text-red-600">
            {submitErrors.errors.direccion}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="telefono">Telefono:</label>
        <input id="telefono" name="telefono" className="" />
        {submitErrors?.errors?.telefono && (
          <span className="text-sm text-red-600">
            {submitErrors.errors.telefono}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="coordy">Coordenada y:</label>
        <input type="number" id="coordy" name="coordy" className="" />
        {submitErrors?.errors?.coordy && (
          <span className="text-sm text-red-600">
            {submitErrors.errors.coordy}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="coordx">Coordenada x:</label>
        <input type="number" id="coordx" name="coordx" className="" />
        {submitErrors?.errors?.coordx && (
          <span className="text-sm text-red-600">
            {submitErrors.errors.coordx}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="mision">Mision:</label>
        <textarea id="mision" name="mision" className="" />
        {submitErrors?.errors?.mision && (
          <span className="text-sm text-red-600">
            {submitErrors.errors.mision}
          </span>
        )}
      </div>
      <div>
        <label htmlFor="vision">Vision:</label>
        <textarea id="vision" name="vision" className="" />
        {submitErrors?.errors?.vision && (
          <span className="text-sm text-red-600">
            {submitErrors.errors.vision}
          </span>
        )}
      </div>
      <button className="bg-green-400">Enviar</button>
    </form>
  );
}
