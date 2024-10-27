import NavigationBar from "@/app/ui/shared/navigation-bar";
import Link from "next/link";
import React from "react";

export default function layout({ children }) {
  const pathBase = "/admin/dashboard";
  return (
    <div className=" mx-auto ">
      <NavigationBar />
      <div className="flex h-auto w-auto">
        <div className="lg:flex flex-col hidden lg:justify-center p-5 border-r-[1px] border-r-black gap-y-4 md:justify-start sm:block">
          <Link href={`${pathBase}/pets`}>
            <button className="px-3 py-1 bg-bgButton rounded-lg text-white min-w-80">
              Registro Mascota
            </button>
          </Link>
          <Link href={`${pathBase}/refuges`}>
            <button className="px-3 py-1 bg-bgButton rounded-lg text-white min-w-80">
              Registro Refugios
            </button>
          </Link>
          <Link href={`${pathBase}`}>
            <button className="px-3 py-1 bg-bgButton rounded-lg text-white min-w-80">
              Administracion de Solicitudes
            </button>
          </Link>
        </div>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
