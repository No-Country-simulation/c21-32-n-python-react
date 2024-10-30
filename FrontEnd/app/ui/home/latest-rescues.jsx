import React from "react";
import Card from "../adoption/card";

export default function LatestRescues() {
  const lastestRescues = [
    {
      id: "1",
      imageSrc: "/images/cat01.jpg",
      date: "01 de enero de 2023",
      title: "Mia",
      description: "Mia es una encantadora gata, con su pelaje elegante y sus ojos hipnotizantes, es la compañera perfecta para cualquier hogar.",
      link: "/detalle-tarjeta-1",
    },
    {
      id: "2",
      imageSrc: "/images/dot01.jpg",
      date: "02 de febrero de 2023",
      title: "Rex",
      description: "Rex es un robusto labrador retriever de 4 años con un corazón amable y leal. Es inteligente y disfruta aprender nuevos trucos.",
      link: "/detalle-tarjeta-2",
    },
    {
      id: "3",
      imageSrc: "/images/cat02.jpg",
      date: "03 de marzo de 2023",
      title: "Simba",
      description: "Simba es un gato tabby de 2 años con una personalidad curiosa y juguetona. Siempre explorando y buscando aventuras.",
      link: "/detalle-tarjeta-3",
    },
    {
      id: "4",
      imageSrc: "/images/dot02.jpg",
      date: "04 de abril de 2023",
      title: "Luna",
      description: "Luna es una golden retriever de 3 años con un pelaje dorado brillante y una personalidad cariñosa. Es muy sociable y adora la compañía.",
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