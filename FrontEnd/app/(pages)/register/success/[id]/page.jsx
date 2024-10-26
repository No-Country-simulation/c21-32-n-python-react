import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { validate as uuidValidate } from "uuid";

function RegisterSuccess({ params }) {
  if (!uuidValidate(params.id)) redirect("/");
  return (
    <div className="w-full bg-[#d9d9d9] h-[1245px]">
      <div className="flex justify-between h-full ">
        <div className="w-1/2">
          <Image
            alt="Cat"
            src="/images/cat.jpeg"
            className="rounded-e-2xl w-full h-full"
            height={1245}
            width={700}
          />
        </div>
        <div className="mt-20 sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="text-3xl">Su registro se creo con exito!</h1>
          <Link
            href={"/login"}
            className="font-semibold leading-6 text-[#fd8d53] hover:text-[#faa16e]"
          >
            Inicie aqui
          </Link>
        </div>
      </div>
    </div>
  );
}
export default RegisterSuccess;
