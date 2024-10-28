"use client";
const Filter = () => {
  const handleChange = (event) => {};

  return (
    <div className="mb-4">
      <select
        onChange={handleChange}
        className="border border-gray-300 rounded-lg p-2"
      >
        <option value="">Selecciona un tipo de mascota</option>
        <option value="perro">Perro</option>
        <option value="gato">Gato</option>
        {/* Agrega más opciones según sea necesario */}
      </select>
    </div>
  );
};

export default Filter;
