import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section id="about-us" className="h-[900px] w-full">
      <div className="flex flex-col items-center justify-center w-[730px] h-full mx-auto">
        <p className="font-bold text-5xl mb-7">NOSOTROS</p>
        <p className="font-normal text-xl text-grayText text-center mb-4">
        ¡Bienvenidos a Buscando huellitas, tu recurso integral para la adopción de mascotas! 
        En nuestra plataforma, nos dedicamos a conectar mascotas en busca de un hogar amoroso con personas responsables
         y cariñosas dispuestas a brindarles una segunda oportunidad. 
         Creemos firmemente que cada mascota merece una vida llena de amor, cuidado y respeto, y trabajamos incansablemente para hacer de este ideal una realidad.
        </p>
        <div className="flex justify-around w-full gap-x-2 mb-7">
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
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

const Avatar = () => {
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
