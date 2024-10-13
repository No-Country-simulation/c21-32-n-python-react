// components/CardList.js
import Card from './Card';

const CardList = () => {
  const cardsData = [
    {
      imageSrc: '/images/no-image.jpg',
      date: '01 de enero de 2023',
      title: 'Título de la Tarjeta 1',
      description: 'Descripción breve de la tarjeta 1.',
    },
    {
      imageSrc: '/images/no-image.jpg',
      date: '02 de febrero de 2023',
      title: 'Título de la Tarjeta 2',
      description: 'Descripción breve de la tarjeta 2.',
    },
    {
      imageSrc: '/images/no-image.jpg',
      date: '03 de marzo de 2023',
      title: 'Título de la Tarjeta 3',
      description: 'Descripción breve de la tarjeta 3.',
    },
    {
      imageSrc: '/images/no-image.jpg',
      date: '04 de abril de 2023',
      title: 'Título de la Tarjeta 4',
      description: 'Descripción breve de la tarjeta 4.',
    },
    {
      imageSrc: '/images/no-image.jpg',
      date: '05 de mayo de 2023',
      title: 'Título de la Tarjeta 5',
      description: 'Descripción breve de la tarjeta 5.',
    },
    {
      imageSrc: '/images/no-image.jpg',
      date: '06 de junio de 2023',
      title: 'Título de la Tarjeta 6',
      description: 'Descripción breve de la tarjeta 6.',
    },
    {
      imageSrc: '/images/no-image.jpg',
      date: '07 de julio de 2023',
      title: 'Título de la Tarjeta 7',
      description: 'Descripción breve de la tarjeta 7.',
    },
    {
      imageSrc: '/images/no-image.jpg',
      date: '08 de agosto de 2023',
      title: 'Título de la Tarjeta 8',
      description: 'Descripción breve de la tarjeta 8.',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center space-x-4 space-y-4">
      {cardsData.map((card, index) => (
        <Card
          key={index}
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

