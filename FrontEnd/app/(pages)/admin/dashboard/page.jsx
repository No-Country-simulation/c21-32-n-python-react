import { fetchRequestsFiltered, fetchUsers } from "@/app/lib/data";
import RequestDashboard from "@/app/ui/admin/request-dashboard";

export default async function AdminDashboardPage() {
  const { requests, totalPages } = await fetchRequestsFiltered("", 1);
  const users = await fetchUsers();
  console.log(requests);
  console.log(users);
  return (
    <div className=" h-[825px] w-full mt-10 ml-2 p-10 bg-slate-100 rounded-3xl">
      <RequestDashboard
        requests={requests}
        totalPages={totalPages}
        users={users}
      />
    </div>
  );
}
