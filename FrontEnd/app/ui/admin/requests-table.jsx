import React from "react";

export default function RequestsTable({ requests }) {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b">
          <th className="text-start pb-2 text-[#B5B7C0] font-medium">
            Nombre y Apellidos
          </th>
          <th className="text-start pb-2 text-[#B5B7C0] font-medium">Correo</th>
          <th className="text-start pb-2 text-[#B5B7C0] font-medium">Fecha</th>
          <th className="text-start pb-2 text-[#B5B7C0] font-medium">Estado</th>
        </tr>
      </thead>
      <tbody>
        {requests?.map((request, i) => {
          return (
            <tr key={i} className="border-b">
              <td className="py-4">{request.name + request.lastName}</td>
              <td className="py-4">{request.email}</td>
              <td className="py-4">{request.date}</td>
              <td className="py-4">
                <BadgeStatus status={request.status} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

const BadgeStatus = ({ status }) => {
  return (
    <>
      {status === "aprovada" ? (
        <div className="bg-[#16C09861] border-2 border-[#00B087] px-3 py-1 rounded text-[#008767] w-fit">
          Aprobada
        </div>
      ) : (
        <div className="bg-[#FFC5C5] border-2 border-[#DF0404] px-3 py-1 rounded text-[#DF0404] w-fit">
          Denegada
        </div>
      )}
    </>
  );
};
