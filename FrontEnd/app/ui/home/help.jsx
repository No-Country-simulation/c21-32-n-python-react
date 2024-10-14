import React from "react";
import Image from "next/image";

export default function Help() {
  return (
    <section className="h-[670px] w-full">
      <div className="flex justify-between h-full">
        <Image
          className="m-auto max-h-[396px]"
          alt="Welcome image"
          src="/images/rectangle.png"
          width={630}
          height={396}
        />
        <div className="m-auto">
          <div className="flex gap-4 h-8 mb-20">
            <Image
              className="m-auto max-h-8"
              alt="star image"
              src="/images/circle.png"
              width={32}
              height={32}
            />
            <h4 className="font-semibold text-2xl w-[400px]">
              Nombre de Perrito
            </h4>
          </div>
          <div className="flex gap-4 h-8">
            <Image
              className="m-auto max-h-8"
              alt="star image"
              src="/images/circle.png"
              width={32}
              height={32}
            />
            <h4 className="font-semibold text-2xl w-[400px]">
              Caracteristicas
            </h4>
          </div>
          <p className="font-normal mb-20 text-[#545454]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </p>
          <div className="flex justify-center">
            <button className="rounded-md w-28 h-10 bg-bgButton text-white font-semibold text-lg">
              Adoptar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
