import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section id="about-us" className="h-[900px] w-full">
      <div className="flex flex-col items-center justify-center w-[730px] h-full mx-auto">
        <p className="font-bold text-5xl mb-7">NOSOTROS</p>
        <p className="font-normal text-xl text-grayText text-center mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore non
          maxime error ipsa ut ipsum inventore, obcaecati vel magnam a
          repellendus maiores fugiat fuga? Placeat error quibusdam doloremque
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
