// app/adoption/SearchBar.jsx
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div className="flex mb-4">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
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
