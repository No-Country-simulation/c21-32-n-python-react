import React from "react";
import Card from "../adoption/card";

export default function LatestRescues() {
  const lastestRescues = [
    {
      id: "1",
      imageSrc: "/images/no-image.jpg",
      date: "01 de enero de 2023",
      title: "Título de la Tarjeta 1",
      description: "Descripción breve de la tarjeta 1.",
      link: "/detalle-tarjeta-1",
    },
    {
      id: "2",
      imageSrc: "/images/no-image.jpg",
      date: "02 de febrero de 2023",
      title: "Título de la Tarjeta 2",
      description: "Descripción breve de la tarjeta 2.",
      link: "/detalle-tarjeta-2",
    },
    {
      id: "3",
      imageSrc: "/images/no-image.jpg",
      date: "03 de marzo de 2023",
      title: "Título de la Tarjeta 3",
      description: "Descripción breve de la tarjeta 3.",
      link: "/detalle-tarjeta-3",
    },
    {
      id: "4",
      imageSrc: "/images/no-image.jpg",
      date: "04 de abril de 2023",
      title: "Título de la Tarjeta 4",
      description: "Descripción breve de la tarjeta 4.",
      link: "/detalle-tarjeta-4",
    },
  ];
  return (
    <section id="latest-rescues" className="h-[630px] w-full">
      <div className="flex justify-center gap-x-4 h-full w-full">
        {lastestRescues.map((card, i) => {
          return (
            <div key={card.id + i} className="w-[255px] h-[400px] my-auto">
              <Card key={card.id} {...card} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
