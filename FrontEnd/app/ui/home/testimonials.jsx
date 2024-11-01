"use client"
import Image from "next/image";
import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const testimonials = [
    {
      quote: '“Estamos muy contentos con la adopcion del gato manchitas, nos lleno la casa de alegria.”',
      author: 'Armando Bustamante',
      title: 'Obrero',
      image: './images/user01.jpg'
    },
    {
      quote: '“Hemos adoptado un perro hace unos dias y realmente no sabiamos lo importante que era para nuestros hijos, gracias”',
      author: 'Vladimir Guerrero',
      title: 'Bombero',
      image: './images/user2.jpg'
    },
    {
      quote: '“Estamos completamente locos con Rita, es más que buena..preciosa, estamos toda la familia enamorados..Está ya vacunada de todo…y tenemos asignado un veterinario voluntario en asistir perros de la perrera de Barcelona…encantado también con ella, muchiiisimas gracias por todo tu apoyo…”',
      author: 'Sergi Cordoba',
      title: 'Freelance',
      image: './images/user3.jpg'
    },
    {
      quote: '“Mi vida cambió el día que adopté a Misifu. Era un gatito negro, con ojos verdes que brillaban como esmeraldas. Lo encontré en un refugio, acurrucado en un rincón, con miedo. Lo tomé en brazos y sentí un calorcito que me llenó el corazón.”',
      author: 'Constanza Martinez',
      title: 'Arquitecta',
      image: './images/user4.jpg'
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // 5000 milisegundos = 5 segundos

    return () => clearInterval(intervalId);
  }, []);

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <section id="testimonials" className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/1 ring-4 ring-orange-300 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
      <p className="font-bold text-5xl mb-7 text-center text-[#0e4a67]">Testimonios</p>
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>{currentTestimonial.quote}</p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt=""
              src={currentTestimonial.image}
              className="mx-auto h-32 w-32 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">{currentTestimonial.author}</div>
              <svg width={5} height={5} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                <circle r={2} cx={2} cy={2} />
              </svg>
              <div className="text-gray-600">{currentTestimonial.title}</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Testimonials;