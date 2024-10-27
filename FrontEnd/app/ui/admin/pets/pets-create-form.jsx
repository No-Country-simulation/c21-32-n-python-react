import React from "react";

function PetsCreateForm({ refuges }) {
  return (
    <form className="pl-4">
  <div className="pb-5">
    <label htmlFor="nombre" className="mt-6 block text-sm font-medium text-gray-700">Nombre:</label>
    <input id="nombre" name="nombre" className="mt-1 block w-1/3 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
  </div>

  <div className="pb-5">
    <label htmlFor="tipo" className="block text-sm font-medium text-gray-700">Tipo:</label>
    <select name="tipo" className="mt-1 block w-1/3 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      <option value="perro" selected>Perro</option>
      <option value="gato">Gato</option>
    </select>
  </div>

  <div className="h-36 pb-0">
  <label htmlFor="descripcion" className="flex text-sm font-medium text-gray-700">Descripción:</label>
  <textarea id="descripcion" name="descripcion" className="mt-1 block w-2/3 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm resize-none" rows="4" />
</div>


  <div className="pb-5">
    <label htmlFor="raza" className="block text-sm font-medium text-gray-700">Raza:</label>
    <input id="raza" name="raza" className="mt-1 block w-1/3 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
  </div>

  <div className="pb-5">
    <label htmlFor="peso" className="block text-sm font-medium text-gray-700">Peso:</label>
    <input id="peso" name="peso" className="mt-1 block w-24 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
  </div>

  <div className="pb-5">
    <label htmlFor="edad" className="block text-sm font-medium text-gray-700">Edad:</label>
    <input id="edad" name="edad" className="mt-1 block w-16 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
  </div>

  <div className="pb-5">
    <label htmlFor="sexo" className="block text-sm font-medium text-gray-700">Sexo:</label>
    <select name="sexo" className="mt-1 block w-auto rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      <option value="M" selected>Macho</option>
      <option value="F">Hembra</option>
    </select>
  </div>

  <div className="pb-5">
    <label htmlFor="img_home_principal" className="block text-sm font-medium text-gray-700">Imagen 1:</label>
    <input 
      type="file" 
      accept="image/png, image/jpeg, image/jpg" 
      id="img_home_principal" 
      name="img_home_principal" 
      className="mt-1 block w-auto rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
    />
  </div>

  <div className="pb-5">
    <label htmlFor="img_print_mascota" className="block text-sm font-medium text-gray-700">Imagen 2:</label>
    <input 
      type="file" 
      accept="image/png, image/jpeg, image/jpg" 
      id="img_print_mascota" 
      name="img_print_mascota" 
      className="mt-1 block w-auto rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
    />
  </div>

  <div className="pb-5">
    <label htmlFor="estatus" className="block text-sm font-medium text-gray-700">Estatus:</label>
    <select name="estatus" className="mt-1 block w-auto rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      <option value="nuevo" selected>Nuevo</option>
      <option value="nuevo" selected>Usado</option>
    </select>
  </div>

  <div className="pb-5">
    <label htmlFor="destacada" className="block text-sm font-medium text-gray-700">Destacada:</label>
    <input type="checkbox" name="destacada" className="mt-1 block w-auto rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
  </div>

  <div className="pb-5">
    <label htmlFor="fecha_refugio" className="block text-sm font-medium text-gray-700">Fecha llegada:</label>
    <input type="date" name="fecha_refugio" className="mt-1 block w-auto rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
  </div>

  <div className="pb-5">
    <label htmlFor="id_refugio" className="block text-sm font-medium text-gray-700">Refugio:</label>
    <select name="id_refugio" className="mt-1 block w-36 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      <option value={`${refuges?.[0]?.id}`} selected>{refuges?.[0]?.name}</option>
      {refuges?.map((refuge) => {
        return (
          <option key={refuge.id} value={`${refuge.id}`}>{refuge.name}</option>
        );
      })}
    </select>
  </div>

    <div className="flex justify-center mt-4 pb-10">
      <button type="submit" className="relative items-center rounded-md bg-green-400 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">Enviar</button>
    </div>

</form>

  );
}

export default PetsCreateForm;
