// components/Card.js
import Image from 'next/image';

const Card = ({ imageSrc, date, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full md:w-1/4 p-4">
      <div className="relative w-full h-10">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <p className="text-gray-500 text-sm mb-2">{date}</p>
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <button className="bg-bgButton text-white px-4 py-2 rounded">
          Ver más
        </button>
      </div>
    </div>
  );
};

export default Card;
