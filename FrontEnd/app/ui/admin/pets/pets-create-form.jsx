import React from "react";

function PetsCreateForm({ refuges }) {
  return (
    <form>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input id="nombre" name="nombre" className="" />
      </div>

      <div>
        <label htmlFor="tipo">Tipo:</label>
        <select name="tipo">
          <option value="perro" selected>
            Perro
          </option>
          <option value="gato">Gato</option>
        </select>
      </div>

      <div>
        <label htmlFor="descripcion">Descripcion:</label>
        <textarea id="descripcion" name="descripcion" className="" />
      </div>

      <div>
        <label htmlFor="raza">Raza:</label>
        <input id="raza" direccion="raza" className="" />
      </div>

      <div>
        <label htmlFor="peso">Peso:</label>
        <input id="peso" name="peso" className="" />
      </div>

      <div>
        <label htmlFor="edad">Edad:</label>
        <input id="edad" name="edad" className="" />
      </div>

      <div>
        <label htmlFor="sexo">Tipo:</label>
        <select name="sexo">
          <option value="M" selected>
            Macho
          </option>
          <option value="F">Hembra</option>
        </select>
      </div>

      <div>
        <label htmlFor="img_home_principal">Imagen 1:</label>
        <input
          type="file"
          accept="image/png, image/jpeg image/jpg"
          id="img_home_principal"
          name="img_home_principal"
          className=""
        />
      </div>

      <div>
        <label htmlFor="img_print_mascota">Imagen 2:</label>
        <input
          type="file"
          accept="image/png, image/jpeg image/jpg"
          id="img_print_mascota"
          name="img_print_mascota"
          className=""
        />
      </div>

      <div>
        <label htmlFor="estatus">Tipo:</label>
        <select name="estatus">
          <option value="nuevo" selected>
            nuevo
          </option>
        </select>
      </div>

      <div>
        <label htmlFor="destacada">Destacada:</label>
        <input type="checkbox" name="destacada" />
      </div>

      <div>
        <label htmlFor="fecha_refugio">Fecha llegada:</label>
        <input type="fecha_refugio" name="fecha_refugio" />
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
                {refuges?.name}
              </option>
            );
          })}
        </select>
      </div>

      <button className="bg-green-400">Enviar</button>
    </form>
  );
}

export default PetsCreateForm;
