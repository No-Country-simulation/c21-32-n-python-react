import React from "react";
import Image from "next/image";
import MapLocation from "./map-location";

export default function Contact() {
  const info = [
    { iconSrc: "/icons/phone-icon.png", content: "+52 123456789" },
    { iconSrc: "/icons/globe-icon.png", content: "refuio123@gmail.com" },
    { iconSrc: "/icons/map-pin-icon.png", content: "Av. 123 " },
  ];

  return (
    <section id="contact" className="h-[400px] w-full">
      <h1 className="font-bold text-4xl text-center mt-8">Contactos</h1>
      <div className="flex justify-items-center items-center">
        <div className="w-1/2">
        <MapLocation />
        </div>
        
        <div className="w-1/2 m-auto">
          {info.map((value, i) => {
            return <IconText key={i} {...value} />;
          })}
        </div>
      </div>
    </section>
  );
}

const IconText = ({ iconSrc, content }) => {
  return (
    <div className="flex gap-4 w-52 m-auto h-fit">
      <Image src={`${iconSrc}`} alt="Icono asociado" width={24} height={24} />
      <p> {content}</p>
    </div>
  );
};
