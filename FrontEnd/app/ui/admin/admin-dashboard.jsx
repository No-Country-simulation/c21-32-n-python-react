"use client";
import React, { useRef, useState } from "react";
import RequestsTable from "./requests-table";
import AdminPagination from "./admin-pagination";
import Image from "next/image";
import UsersTable from "./users-table";
//import { useSearchParams } from "next/navigation";

export default function AdminDashboard({ requests, totalPages }) {
  //const searchParams = useSearchParams();
  //const query = searchParams.get("page");
  const [isRequestsChecked, setIsRequestsChecked] = useState(true);

  const handleChange = () => {
    setIsRequestsChecked(!isRequestsChecked);
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="flex justify-between mb-12">
          <div className="flex gap-x-4">
            <input
              type="radio"
              name="admin-nav"
              id="requests"
              className="appearance-none peer/requests"
              defaultChecked
              onChange={handleChange}
            />
            <label
              htmlFor="requests"
              className="text-slate-400 peer-checked/requests:text-slate-950 font-semibold text-xl mb-4"
            >
              Adoptantes
            </label>
            <p className="font-semibold text-xl mb-4">|</p>
            <input
              type="radio"
              name="admin-nav"
              id="users"
              className="appearance-none peer/users"
              onChange={handleChange}
            />
            <label
              htmlFor="users"
              className="text-slate-400 peer-checked/users:text-slate-950 font-semibold text-xl mb-4"
            >
              Usuarios
            </label>
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
        {isRequestsChecked ? (
          <RequestsTable requests={requests} />
        ) : (
          <UsersTable users={requests} />
        )}
      </div>
      <AdminPagination totalPages={totalPages} />
    </div>
  );
}
