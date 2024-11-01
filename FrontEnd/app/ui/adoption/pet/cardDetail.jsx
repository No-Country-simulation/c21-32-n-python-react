import Image from "next/image"; // Asegura de importar Image
import Link from "next/link";

const CardDetail = ({
  imageSrc,
  date,
  title,
  description,
  edad,
  peso,
  raza,
  sexo,
}) => {
  const sexFormatted = sexo === "M" ? "Macho" : "Hembra";
  return (
    <div className="flex justify-around pt-12 ">
      <div className="relative w-1/3 h-64 ">
        <Image
          className="rounded-lg m-auto"
          src={imageSrc}
          alt={title}
          objectFit="cover"
          width={300}
          height={300}
        />
      </div>
      <div className="p-4 w-2/3 bg-white rounded-lg ">
        <p className="text-gray-500 text-sm mb-2">{date}</p>
        <h2 className="text-xl font-semibold mb-2">
          <span>Nombre:</span> {title}
        </h2>
        <p className="text-gray font-semibold mb-2">
          <span>Descripción</span>
        </p>
        <p className="text-gray-700 pb-10">
          {description}
          <br />
          <span className="text-gray font-semibold">Edad:</span> {edad}
          <br />
          <span className="text-gray font-semibold">Peso:</span> {peso}
          <br />
          <span className="text-gray font-semibold">Raza:</span> {raza}
          <br />
          <span className="text-gray font-semibold">Sexo:</span> {sexFormatted}
        </p>
        <Link href="#">
          <button className="rounded-md w-28 h-10 bg-bgButton text-white font-semibold text-lg">
            Adoptar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardDetail;
