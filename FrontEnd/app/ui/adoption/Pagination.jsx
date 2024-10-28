// app/adoption/Pagination.jsx
"use client";

import { redirect, usePathname, useSearchParams } from "next/navigation";

const Pagination = ({ totalPages }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const moveToSelectedPage = (page) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    redirect(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex justify-center mt-4">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => {
            moveToSelectedPage(index + 1);
          }}
          className={`mx-1 px-3 py-1 rounded-md ${
            currentPage === index + 1 ? "bg-bgButton text-white" : "bg-gray-200"
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
