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
    const isSubmitValidated = await validateRefugeSubmit(formData);
    if (isSubmitValidated.success) {
      const createRefuge = await createRefugeAction(formData);

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
      </div>

      <div>
        <label htmlFor="direccion">Direccion:</label>
        <input id="direccion" name="direccion" className="" />
      </div>

      <div>
        <label htmlFor="telefono">Telefono:</label>
        <input id="telefono" name="telefono" className="" />
      </div>

      <div>
        <label htmlFor="coordy">Coordenada y:</label>
        <input type="number" id="coordy" name="coordy" className="" />
      </div>

      <div>
        <label htmlFor="coordx">Coordenada x:</label>
        <input type="number" id="coordx" name="coordx" className="" />
      </div>

      <div>
        <label htmlFor="mision">Mision:</label>
        <textarea id="mision" name="mision" className="" />
      </div>
      <div>
        <label htmlFor="vision">Vision:</label>
        <textarea id="vision" name="vision" className="" />
      </div>
      <button className="bg-green-400">Enviar</button>
    </form>
  );
}
