"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";
import { useDebouncedCallback } from "use-debounce";

const SearchBar = () => {
  //const [query, setQuery] = useState("");
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchRef = useRef(null);

  const handleSearch = useDebouncedCallback(() => {
    const params = new URLSearchParams(searchParams);
    const search = searchRef?.current?.value;
    if (search) {
      params.set("search", search);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <div className="flex mb-4">
      <input
        ref={searchRef}
        type="text"
        onChange={handleSearch}
        placeholder="Buscar mascota..."
        className="border border-gray-300 rounded-lg p-2 flex-grow"
      />
      <button
        onClick={handleSearch}
        className="ml-2 bg-bgButton text-white rounded-lg px-4 py-2"
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
