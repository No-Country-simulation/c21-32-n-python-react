import React from "react";
import { Delete, Edit } from "@geist-ui/icons";

export default function UsersTable({ users }) {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b">
          <th className="text-start pb-2 text-[#B5B7C0] font-medium">
            Nombre y Apellidos
          </th>
          <th className="text-start pb-2 text-[#B5B7C0] font-medium">Correo</th>
          <th className="text-start pb-2 text-[#B5B7C0] font-medium">
            Refugio
          </th>
          <th className="text-start pb-2 text-[#B5B7C0] font-medium">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user, i) => {
          return (
            <tr key={i} className="border-b">
              <td className="py-4">{`${user.name} ${user.lastName}`}</td>
              <td className="py-4">{user.email}</td>
              <td className="py-4">{user.refugio}</td>
              <td className="py-4 flex gap-x-1">
                <Edit size={24} color="orange" />
                <Delete size={24} color="red" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
