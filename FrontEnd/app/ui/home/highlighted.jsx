import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Highlighted() {
  return (
    <section id="highlighted" className="w-full h-[614px]">
      <div className="flex justify-between h-full">
        <div className="m-auto">
          <div className="flex gap-4 h-8 mb-20">
            <Image
              className="m-auto max-h-8"
              alt="star image"
              src="/images/circle.png"
              width={16}
              height={16}
            />
            <h4 className="font-semibold text-2xl w-[400px]">
              Nombre: Boby
            </h4>
          </div>
          <div className="flex gap-4 h-8">
            <Image
              className="m-auto max-h-8"
              alt="star image"
              src="/images/circle.png"
              width={16}
              height={16}
            />
            <h4 className="font-semibold text-2xl w-[400px]">
              Caracteristicas
            </h4>
          </div>
          <p className="font-normal mb-20 text-[#545454]">
            Boby es un perro de raza mixta. Es un perro pequeño <br></br> y tiene pelaje de mezcla de colores (marrón, blanco y negro).<br></br> Es un perro muy bonito y muy amable.
          </p>
          <div className="flex justify-center">
            {/* TODO: recibir id para el detalle*/}
            <Link href="/adoption/pet/1">
              <button className="rounded-md w-28 h-10 bg-bgButton text-white font-semibold text-lg">
                Adoptar
              </button>
            </Link>
          </div>
        </div>
        <Image
          className="m-auto max-h-[396px]"
          alt="Welcome image"
          src="/images/firulais.jpg"
          width={430}
          height={396}
        />
      </div>
    </section>
  );
}
