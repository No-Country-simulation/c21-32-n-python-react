"use client"; 

import { useParams } from 'next/navigation';
import CardDetail from './CardDetail'; // Asegúrar de que la ruta sea correcta
import NavigationBar from "../../../ui/shared/navigation-bar";
import ImageGallery from './ImageGallery'; 

export default function CardDetailPage() {
    const { id } = useParams(); // Obtiene el ID de la URL

    // Aquí se carga los detalles de la tarjeta según el ID
    const cardDetails = {
        imageSrc: '/images/no-image.jpg', // Ajusta la ruta según las imágenes
        date: '01 de enero de 2023',
        title: `Título de la tarjeta ${id}`,
        description: `Descripción completa de la tarjeta ${id}.`,
    };

     // Imágenes de la galería
     const galleryImages = [
        '/images/no-image.jpg',
        '/images/no-image.jpg',
        '/images/no-image.jpg',
        '/images/no-image.jpg',
        // Agrega más imágenes según sea necesario
    ];

    return (
        <div>
            <div className="container mx-auto">
                <NavigationBar />
            </div>
        <div className="container mx-auto p-4 pt-40">
            <CardDetail
                imageSrc={cardDetails.imageSrc}
                date={cardDetails.date}
                title={cardDetails.title}
                description={cardDetails.description}
            />
        </div>
        <ImageGallery images={galleryImages} />
        </div>
    );
}
