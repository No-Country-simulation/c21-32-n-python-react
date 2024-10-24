"use client";

import Banner from "@/app/ui/adoption/banner";
import CardList from "@/app/ui/adoption/cardList";
import Filter from "@/app/ui/adoption/Filter";
import Pagination from "@/app/ui/adoption/Pagination";
import SearchBar from "@/app/ui/adoption/SearchBar";
import NavigationBar from "@/app/ui/shared/navigation-bar";
import { useState } from "react";

export default function AdoptionPage() {
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
    <div>
      <div className="container mx-auto">
        <NavigationBar />
        <Banner />
      </div>
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
    </div>
  );
}
