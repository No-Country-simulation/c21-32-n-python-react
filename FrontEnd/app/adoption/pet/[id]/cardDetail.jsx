import Image from "next/image"; // Asegura de importar Image
import Link from 'next/link';

const CardDetail = ({ imageSrc, date, title, description }) => {
    return (
        <div className="flex">
            <div className="relative w-1/2 h-64">
                <Image
                    src={imageSrc}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="p-8 w-1/2">
                <p className="text-gray-500 text-sm mb-2">{date}</p>
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-700 pb-10">{description}</p>
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
