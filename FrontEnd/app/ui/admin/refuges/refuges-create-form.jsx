import React from "react";

export default function RefugesCreateForm() {
  return (
    <form>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input id="name" name="name" className="" />
      </div>

      <div>
        <label htmlFor="dirlogo">Logo:</label>
        <input id="dirlogo" name="dirlogo" className="" />
      </div>

      <div>
        <label htmlFor="Horario_atencion">Horario_atencion:</label>
        <input id="Horario_atencion" name="Horario_atencion" className="" />
      </div>

      <div>
        <label htmlFor="direccion">Direccion:</label>
        <input id="direccion" direccion="name" className="" />
      </div>

      <div>
        <label htmlFor="telefono">Telefono:</label>
        <input id="telefono" name="telefono" className="" />
      </div>

      <div>
        <label htmlFor="coordy">Coordenada y:</label>
        <input id="coordy" name="coordy" className="" />
      </div>

      <div>
        <label htmlFor="coordx">Coordenada x:</label>
        <input id="coordx" name="coordx" className="" />
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
