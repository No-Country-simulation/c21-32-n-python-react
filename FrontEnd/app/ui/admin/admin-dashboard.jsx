"use client";
import React from "react";
import RequestsTable from "./requests-table";
import AdminPagination from "./admin-pagination";
import Image from "next/image";
//import { useSearchParams } from "next/navigation";

export default function AdminDashboard({ requests, totalPages }) {
  //const searchParams = useSearchParams();
  //const query = searchParams.get("page");

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="flex justify-between mb-12">
          <div>
            <h1 className="font-semibold text-xl mb-4">Adoptantes</h1>
            <p className="font-normal text-sm text-[#16C098]">Solicitudes</p>
          </div>
          <div className="flex min-w-64 max-h-10 bg-[#F9FBFF] rounded-xl py-3 px-2">
            <Image
              alt="Lens icon"
              src={"/icons/lens-icon.png"}
              width={18}
              height={18}
            />
            <input
              placeholder="Búsqueda"
              className="focus:outline-none bg-transparent ml-1"
            />
          </div>
        </div>
        <RequestsTable requests={requests} />
      </div>
      <AdminPagination totalPages={totalPages} />
    </div>
  );
}
