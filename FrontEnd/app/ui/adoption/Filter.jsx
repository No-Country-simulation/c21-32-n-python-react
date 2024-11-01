"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = (event) => {
    const params = new URLSearchParams(searchParams);
    const selectedValue = event.target.value;

    if (selectedValue) {
      params.set("filter", selectedValue);
    } else {
      params.delete("filter");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mb-4">
      <select
        onChange={handleChange}
        className="border border-gray-300 rounded-lg p-2"
      >
        <option value="" defaultChecked>
          Selecciona un tipo de mascota
        </option>
        <option value="1">Gato</option>
        <option value="2">Perro</option>        
        {/* Agrega más opciones según sea necesario */}
      </select>
    </div>
  );
};

export default Filter;
