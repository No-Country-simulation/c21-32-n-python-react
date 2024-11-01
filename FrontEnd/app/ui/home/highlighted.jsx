import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Highlighted() {
  return (
    <section id="highlighted" className="w-full h-[614px]">
      
      <div className="flex justify-between h-full">      
        <div className="m-auto">

        <h1 className="font-bold text-5xl mb-7 text-center text-[#0e4a67] m-auto">Mascota Destacada</h1>
          <div className="flex gap-4 h-8">
            <h4 className="font-semibold text-2xl">Nombre: Boby</h4>            
          </div>
          <div className="flex gap-4 h-8">
            <h4 className="font-semibold text-2xl w-[400px]">
              Caracteristicas
            </h4>
          </div>
          <p className="font-normal mb-20 text-[#545454]">
            Boby es un perro de raza mixta. Es un perro pequeño <br></br> y
            tiene pelaje de mezcla de colores (marrón, blanco y negro).<br></br>{" "}
            Es un perro muy bonito y muy amable.
          </p>
          <div className="flex justify-center">
            {/* TODO: recibir id para el detalle*/}
            <Link href="/adoption/pet/1">
              <button className="rounded-md w-28 h-10 bg-gradient-to-l from-red-500 to-orange-500 bg-bgButton text-white font-semibold text-lg">
                Adoptar
              </button>
            </Link>
          </div>
        </div>
        <Image
          className="m-auto max-h-[396px] rounded-lg"
          alt="Welcome image"
          src="/images/Firulais.jpg"
          width={430}
          height={396}
        />
      </div>
    </section>
  );
}
