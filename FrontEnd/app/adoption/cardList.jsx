// components/CardList.js
import Card from "./card";

const CardList = () => {
    const cardsData = [
        {
            id: "1",
            imageSrc: "/images/no-image.jpg",
            date: "01 de enero de 2023",
            title: "Título de la Tarjeta 1",
            description: "Descripción breve de la tarjeta 1.",
            link: "/detalle-tarjeta-1",
        },
        {
            id: "2",
            imageSrc: "/images/no-image.jpg",
            date: "02 de febrero de 2023",
            title: "Título de la Tarjeta 2",
            description: "Descripción breve de la tarjeta 2.",
            link: "/detalle-tarjeta-2",
        },
        {
            id: "3",
            imageSrc: "/images/no-image.jpg",
            date: "03 de marzo de 2023",
            title: "Título de la Tarjeta 3",
            description: "Descripción breve de la tarjeta 3.",
            link: "/detalle-tarjeta-3",
        },
        {
            id: "4",
            imageSrc: "/images/no-image.jpg",
            date: "04 de abril de 2023",
            title: "Título de la Tarjeta 4",
            description: "Descripción breve de la tarjeta 4.",
            link: "/detalle-tarjeta-4",
        },
        {
            id: "5",
            imageSrc: "/images/no-image.jpg",
            date: "05 de mayo de 2023",
            title: "Título de la Tarjeta 5",
            description: "Descripción breve de la tarjeta 5.",
            link: "/detalle-tarjeta-5",
        },
        {   id: "6",
            imageSrc: "/images/no-image.jpg",
            date: "06 de junio de 2023",
            title: "Título de la Tarjeta 6",
            description: "Descripción breve de la tarjeta 6.",
            link: "/detalle-tarjeta-6",
        },
        {
            id: "7",
            imageSrc: "/images/no-image.jpg",
            date: "07 de julio de 2023",
            title: "Título de la Tarjeta 7",
            description: "Descripción breve de la tarjeta 7.",
            link: "/detalle-tarjeta-7",
        },
        {
            id: "8",
            imageSrc: "/images/no-image.jpg",
            date: "08 de agosto de 2023",
            title: "Título de la Tarjeta 8",
            description: "Descripción breve de la tarjeta 8.",
            link: "/detalle-tarjeta-8",
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cardsData.map((card) => (
        <Card className="w-full"
          key={card.id}
          id={card.id} // Asegúrate de pasar el id aquí
          imageSrc={card.imageSrc}
          date={card.date}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
    );
};

export default CardList;
