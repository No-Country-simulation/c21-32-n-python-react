// app/adoption/[id]/ImageGallery.jsx

import Image from 'next/image';

const ImageGallery = ({ images }) => {
    return (
        <div className="mt-4 p-20">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
                {images.map((src, index) => (
                    <div key={index} className="relative w-full h-48">
                        <Image src={src} alt={`Imagen ${index + 1}`} layout="fill" objectFit="cover" className="rounded-lg" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
