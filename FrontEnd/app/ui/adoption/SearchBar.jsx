"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const SearchBar = () => {
  //const [query, setQuery] = useState("");
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = useDebouncedCallback((search) => {
    const params = new URLSearchParams(searchParams);
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
        type="text"
        value={query}
        onChange={(e) => handleChange(e.target.value)}
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
