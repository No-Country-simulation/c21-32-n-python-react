// components/Card.js
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ imageSrc, date, title, description, id }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full p-4 flex flex-col">
      <div className="relative w-full h-40 pt-10">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex-1 p-4 flex flex-col justify-between">
        <p className="text-gray-500 text-sm mb-2">{date}</p>
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4 flex-grow">{description}</p> 
        <Link href={`/adoption/pet/${id}`}> 
          <button className="rounded-md w-28 h-10 bg-bgButton text-white font-semibold text-lg"> 
            Ver más
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
