import { fetchRequestsFiltered, fetchUsers } from "@/app/lib/data";
import RequestDashboard from "@/app/ui/admin/request-dashboard";

export default async function AdminDashboardPage() {
  const { requests, totalPages } = await fetchRequestsFiltered("", 1);
  const users = await fetchUsers();
  console.log(requests);
  console.log(users);
  return (
    <div className="h-auto w-auto mt-10 mr-2 ml-2 p-2 bg-[#024873] border rounded-3xl" >
      <div className=" pl-6 pr-6 h-auto w-auto mt-2 pt-6 bg-slate-100 border rounded-3xl">
      <p className="flex justify-center items-center font-bold text-5xl mb-7 text-[#0e4a67]">Administracion de Solicitudes</p>
        <RequestDashboard
          requests={requests}
          totalPages={totalPages}
          users={users}
        />
      </div>
    </div>
  );
}
