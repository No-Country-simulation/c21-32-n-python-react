"use client";
import { useState } from "react";
import CardList from "./cardList";
import Filter from "./Filter";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";

function AdoptionContainer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const totalCards = 100; // Por ejemplo, el número total de tarjetas (esto debería ser dinámico)
  const cardsPerPage = 10; // Define cuántas tarjetas se mostrarán por página
  const totalPages = Math.ceil(totalCards / cardsPerPage); // Calcular total de páginas

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); // Resetear a la primera página al buscar
  };

  const handleFilter = (value) => {
    setFilterValue(value);
    setCurrentPage(1); // Resetear a la primera página al filtrar
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="flex justify-around pt-12">
        <SearchBar onSearch={handleSearch} />
        <Filter onFilter={handleFilter} />
      </div>
      <div className="container mx-auto p-6 pt-20">
        <CardList
          searchQuery={searchQuery}
          filterValue={filterValue}
          currentPage={currentPage}
          cardsPerPage={cardsPerPage}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}

export default AdoptionContainer;
