import { fetchRequestsFiltered } from "@/app/lib/data";
import RequestDashboard from "@/app/ui/admin/request-dashboard";

export default async function AdminDashboardPage() {
  const { requests, totalPages } = await fetchRequestsFiltered();
  return (
    <div className=" h-[825px] w-full mt-10 ml-2 p-10 bg-black rounded-3xl">
      <RequestDashboard requests={requests} totalPages={totalPages} />
    </div>
  );
}
