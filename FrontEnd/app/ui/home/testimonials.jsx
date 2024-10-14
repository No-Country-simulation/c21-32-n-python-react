import Image from "next/image";
import React from "react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full h-[460px]">
      <div className="flex flex-col justify-center items-center h-full">
        <Image
          className="mb-5"
          src="/images/circle.png"
          alt="Testimonial Avatar"
          height={96}
          width={96}
        />
        <p className="w-[720px] text-center text-grayText">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic culpa,
          officia quia fugit consequuntur atque molestias excepturi harum ea
        </p>
      </div>
    </section>
  );
}
