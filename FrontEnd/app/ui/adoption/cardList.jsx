// components/CardList.js
import Card from "./card";

const CardList = ({
  dataList,
  searchQuery,
  filterValue,
  currentPage,
  cardsPerPage,
}) => {
  // Filtra las tarjetas según el valor de búsqueda y filtro
  const filteredCards = dataList.filter((card) => {
    const matchesSearch = card.nombre
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter = filterValue ? card.type === filterValue : true;
    return matchesSearch && matchesFilter;
  });

  // Paginación
  const startIndex = (currentPage - 1) * cardsPerPage;
  const paginatedCards = filteredCards.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {paginatedCards.map((card) => (
        <Card
          key={card.id_mascota}
          id={card.id_mascota}
          date={card.fecha_refugio}
          description={card.descripcion}
          imageSrc={card.img_home_principal}
          title={card.nombre}
        />
      ))}
    </div>
  );
};

export default CardList;
