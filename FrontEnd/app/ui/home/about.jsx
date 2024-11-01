import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section id="about-us" className="h-[900px] w-full">
      <div className="flex flex-col items-center justify-center w-[730px] h-full mx-auto">
        <p className="font-bold text-5xl mb-7 text-[#0e4a67]">Nosotros</p>
        <p className="font-normal text-xl text-grayText text-center mb-4">
        <span className="font-bold text-black">Bienvenidos a Buscando Huellas</span>, un refugio dedicado a dar una segunda oportunidad a perros y gatos en busca de un hogar amoroso. Fundado en 1990, nuestro refugio ha sido un faro de esperanza para cientos de animales abandonados y maltratados.
        </p>
        <div className="flex justify-around w-full gap-x-2 mb-7">
          <Avatar1 />
          <Avatar2 />
          <Avatar3 />
          <Avatar4 />
        </div>
        <Image
          className="max-w-[754px] max-h-[358px] rounded-lg border border-black"
          src="/images/Nosotros.jpg"
          alt="Imagen del refugio"
          height={500}
          width={600}
        />
      </div>
    </section>
  );
}

const Avatar1 = () => {
  return (
    <div>
      <Image
        className="mb-5 rounded-full border border-black" 
        src="/images/face1.jpg"
        alt="Testimonial Avatar"
        height={120}
        width={120}
      />
      <p className="text-center">María José <br></br> García</p>
    </div>
  );
};

const Avatar2 = () => {
  return (
    <div>
      <Image
        className="mb-5 rounded-full border border-black"
        src="/images/face2.jpg"
        alt="Testimonial Avatar"
        height={120}
        width={120}
      />
      <p className="text-center">Luis Felipe<br></br>Montaño</p>
    </div>
  );
};

const Avatar3 = () => {
  return (
    <div>
      <Image
        className="mb-5 rounded-full border border-black"
        src="/images/face3.jpg"
        alt="Testimonial Avatar"
        height={120}
        width={120}
      />
      <p className="text-center">Angela Camila<br></br>Gonzalez</p>
    </div>
  );
};

const Avatar4 = () => {
  return (
    <div>
      <Image
        className="mb-5 rounded-full border border-black"
        src="/images/face4.jpg"
        alt="Testimonial Avatar"
        height={120}
        width={120}
      />
      <p className="text-center">Miguel Angel<br></br>Zanabria</p>
    </div>
  );
};

