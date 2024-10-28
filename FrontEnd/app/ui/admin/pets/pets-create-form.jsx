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
      action={(formData) => {
        submitPet(formData);
      }}
    >
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input id="nombre" name="nombre" className="" />
        {submitErrors?.errors.nombre && (
          <span className="text-sm text-red-500">
            {submitErrors?.errors.nombre}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="tipo">Tipo:</label>
        <select name="tipo">
          <option value="1" selected>
            Perro
          </option>
          <option value="2">Gato</option>
        </select>
        {submitErrors?.errors.tipo && (
          <span className="text-sm text-red-500">
            {submitErrors?.errors.tipo}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="descripcion">Descripcion:</label>
        <textarea id="descripcion" name="descripcion" className="" />
        {submitErrors?.errors.descripcion && (
          <span className="text-sm text-red-500">
            {submitErrors?.errors.descripcion}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="raza">Raza:</label>
        <input id="raza" name="raza" className="" />{" "}
        {submitErrors?.errors.raza && (
          <span className="text-sm text-red-500">
            {submitErrors?.errors.raza}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="peso">Peso:</label>
        <input id="peso" name="peso" className="" type="number" />
        {submitErrors?.errors.peso && (
          <span className="text-sm text-red-500">
            {submitErrors?.errors.peso}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="edad">Edad:</label>
        <input id="edad" name="edad" className="" />{" "}
        {submitErrors?.errors.edad && (
          <span className="text-sm text-red-500">
            {submitErrors?.errors.edad}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="sexo">Tipo:</label>
        <select name="sexo">
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

      <div>
        <label htmlFor="img_home_principal">Imagen 1:</label>
        <input
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          id="img_home_principal"
          name="img_home_principal"
          className=""
        />
        {submitErrors?.errors.img_home_principal && (
          <span className="text-sm text-red-500">
            {submitErrors?.errors.img_home_principal}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="img_print_mascota">Imagen 2:</label>
        <input
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          id="img_print_mascota"
          name="img_print_mascota"
          className=""
        />
        {submitErrors?.errors.img_print_mascota && (
          <span className="text-sm text-red-500">
            {submitErrors?.errors.img_print_mascota}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="estatus">Estado:</label>
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

      <div>
        <label htmlFor="destacada">Destacada:</label>
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

      <div>
        <label htmlFor="fecha_refugio">Fecha llegada:</label>
        <input type="date" name="fecha_refugio" />
        {submitErrors?.errors.fecha_refugio && (
          <span className="text-sm text-red-500">
            {submitErrors?.errors.fecha_refugio}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="id_refugio">Refugio:</label>
        <select name="id_refugio">
          <option value={`${refuges?.[0]?.id}`} selected>
            {refuges?.[0]?.name}
          </option>
          {refuges?.map((refuge) => {
            return (
              <option key={refuge.id} value={`${refuge.id}`}>
                {refuge?.name}
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

      <button className="bg-green-400">Enviar</button>
    </form>
  );
}

export default PetsCreateForm;
