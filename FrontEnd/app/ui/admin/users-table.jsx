import React from "react";

export default function UsersTable({ users }) {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b">
          <th className="text-start pb-2 text-[#B5B7C0] font-medium">
            Nombre y Apellidos
          </th>
          <th className="text-start pb-2 text-[#B5B7C0] font-medium">Correo</th>
          <th className="text-start pb-2 text-[#B5B7C0] font-medium">Fecha</th>
          <th className="text-start pb-2 text-[#B5B7C0] font-medium">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user, i) => {
          return (
            <tr key={i} className="border-b">
              <td className="py-4">{user.name + user.lastName}</td>
              <td className="py-4">{user.email}</td>
              <td className="py-4">{user.date}</td>
              <td className="py-4">Acciones</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
