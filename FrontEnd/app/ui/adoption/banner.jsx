import Image from "next/image";

export default function Banner() {
    return (
        <div className="flex w-full h-64 bg-gray-200">
            <div className="relative w-1/2 h-full">
                <Image
                    src="/images/banner1.png" // Ruta de la primera imagen
                    alt="Primera imagen"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="relative w-1/2 h-full">
                <Image
                    src="/images/banner2.png" // Ruta de la segunda imagen
                    alt="Segunda imagen"
                    layout="fill"
                    objectFit="cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Añadir el prop sizes para diferentes tamaños de pantallas
                    className="z-0"
                />
            </div>
        </div>
    );
}
