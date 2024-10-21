"use client";
import Image from "next/image";
import React, { useState } from "react";
import { clsx } from "clsx";

export default function AdminPagination({ totalPages }) {
  const [currentPage, setCurrentPage] = useState(1);

  const movePageForward = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const movePageBackward = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const moveToSelectedPage = (e) => {
    setCurrentPage(Number(e.target.id));
  };

  return (
    <div className="w-full">
      <hr />
      <div className="flex justify-between items-center py-9">
        <p>Paginas</p>
        <div className="flex">
          <button
            className="bg-[#F5F5F5] border border-[#EEEEEE] rounded"
            onClick={movePageBackward}
          >
            <Image
              src={"/icons/backward-icon.png"}
              width={24}
              height={24}
              alt="Atras"
            />
          </button>
          {Array.from({ length: totalPages }, (_, index) => {
            return (
              <button
                onClick={moveToSelectedPage}
                className={clsx("py-[6x] px-[10px]", {
                  "bg-violet-500": index === currentPage - 1,
                })}
                key={index}
                id={index + 1}
              >
                {index + 1}
              </button>
            );
          })}
          <button
            className="bg-[#F5F5F5] border border-[#EEEEEE] rounded"
            onClick={movePageForward}
          >
            <Image
              src={"/icons/fordward-icon.png"}
              width={24}
              height={24}
              alt="Adelante"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
