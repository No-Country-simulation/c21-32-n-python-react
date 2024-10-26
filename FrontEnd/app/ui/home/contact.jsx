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
    <section id="contact" className="h-[613px] w-full">
      <h1 className="font-bold text-4xl text-center mt-8">CONTACTO</h1>
      <div className="flex justify-between items-center">
        {/* <Image
          className="max-h-[275px] min-h-[275px]"
          alt="mapa"
          width={275}
          height={275}
          src="/images/rectangle.png"
        /> */}
        <MapLocation />
        <div>
          {info.map((value, i) => {
            return <IconText key={i} {...value} />;
          })}
        </div>
        <Image
          className="min-h-[450px] max-h-[450px] max-w-[372]"
          alt="mapa"
          width={372}
          height={450}
          src="/images/cat.png"
        />
      </div>
    </section>
  );
}

const IconText = ({ iconSrc, content }) => {
  return (
    <div className="flex gap-4 w-52 mb-4 h-fit">
      <Image src={`${iconSrc}`} alt="Icono asociado" width={24} height={24} />
      <p> {content}</p>
    </div>
  );
};
