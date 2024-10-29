import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section id="about-us" className="h-[900px] w-full">
      <div className="flex flex-col items-center justify-center w-[730px] h-full mx-auto">
        <p className="font-bold text-5xl mb-7">NOSOTROS</p>
        <p className="font-normal text-xl text-grayText text-center mb-4">
        <span>Bienvenidos a Buscando Huellas</span>, un refugio dedicado a dar una segunda oportunidad a perros y gatos en busca de un hogar amoroso. Fundado en 1990, nuestro refugio ha sido un faro de esperanza para cientos de animales abandonados y maltratados.
        </p>
        <div className="flex justify-around w-full gap-x-2 mb-7">
          <Avatar1 />
          <Avatar2 />
          <Avatar3 />
          <Avatar4 />
        </div>
        <Image
          className="max-w-[754px] max-h-[358px]"
          src="/images/rectangle.png"
          alt="Imagen del refugio"
          height={358}
          width={754}
        />
      </div>
    </section>
  );
}

const Avatar1 = () => {
  return (
    <div>
      <Image
        className="mb-5"
        src="/images/circle.png"
        alt="Testimonial Avatar"
        height={64}
        width={64}
      />
      <p>Nombre</p>
    </div>
  );
};

const Avatar2 = () => {
  return (
    <div>
      <Image
        className="mb-5"
        src="/images/circle.png"
        alt="Testimonial Avatar"
        height={70}
        width={70}
      />
      <p>Nombre</p>
    </div>
  );
};

const Avatar3 = () => {
  return (
    <div>
      <Image
        className="mb-5"
        src="/images/circle.png"
        alt="Testimonial Avatar"
        height={64}
        width={64}
      />
      <p>Nombre</p>
    </div>
  );
};

const Avatar4 = () => {
  return (
    <div>
      <Image
        className="mb-5"
        src="/images/circle.png"
        alt="Testimonial Avatar"
        height={64}
        width={64}
      />
      <p>Nombre</p>
    </div>
  );
};

