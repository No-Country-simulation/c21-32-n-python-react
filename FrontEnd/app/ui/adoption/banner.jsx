import Image from "next/image";

export default function Banner() {
    return (
        <div className="flex w-full h-64 bg-gray-200">
            <div className="relative w-5/6 h-full">
                <Image
                    src="/images/banner1.png" // Ruta de la primera imagen
                    alt="Primera imagen"
                    layout="fill"
                    className="w-full"
                />
            </div>
        </div>
    );
}
