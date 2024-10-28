// components/CardList.js
import Card from "./card";

const CardList = ({ dataList }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {dataList?.map((card) => (
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
