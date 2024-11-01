//"use client";
import React from "react";
import ImageGallery from "./ImageGallery";
import CardDetail from "./cardDetail";
//import { useParams } from "next/navigation";

async function CardDetailContainer({ params }) {
  const { id } = params; // Obtiene el ID de la URL
  const data = await fetch(`http://127.0.0.1:8000/api/v1/pets/mascotas/${id}`);
  const pet = await data.json();
  // Aquí se carga los detalles de la tarjeta según el ID
  const cardDetails = {
    imageSrc: pet.img_print_mascota, // Ajusta la ruta según las imágenes
    date: pet.fecha_refugio,
    title: pet.nombre,
    description: pet.descripcion,
    edad:pet.edad,
    peso:pet.peso,
    raza:pet.raza,
    sexo:pet.Sexo
  };

  // Imágenes de la galería
  const galleryImages = [
    pet.img_home_principal,
    // Agrega más imágenes según sea necesario
  ];

  return (
    <>
      <div className="container mx-auto p-4 pt-40">
        <CardDetail
          imageSrc={cardDetails.imageSrc}
          date={cardDetails.date}
          title={cardDetails.title}
          description={cardDetails.description}
          edad={cardDetails.edad}
          peso={cardDetails.peso}
          raza={cardDetails.raza}
          sexo={cardDetails.sexo}

        />
      </div>
      <ImageGallery images={galleryImages} />
    </>
  );
}

export default CardDetailContainer;
