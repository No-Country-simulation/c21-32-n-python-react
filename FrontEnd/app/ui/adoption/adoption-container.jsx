"use client";
import { useState } from "react";
import CardList from "./cardList";
import Filter from "./Filter";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";

const CARDS_TO_SHOW = 8;

function AdoptionContainer({ pets }) {
  const totalPages = Math.ceil(pets.length / CARDS_TO_SHOW);

  return (
    <>
      <div className="flex justify-around pt-12">
        <SearchBar />
        <Filter onFilter={handleFilter} />
      </div>
      <div className="container mx-auto p-6 pt-20">
        <CardList dataList={pets} />
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}

export default AdoptionContainer;
