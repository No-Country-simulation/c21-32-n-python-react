import { fetchRequestsFiltered } from "@/app/lib/data";
import AdminDashboard from "@/app/ui/admin/admin-dashboard";
import NavigationBar from "@/app/ui/shared/navigation-bar";

export default async function AdminDashboardPage() {
  const { requests, totalPages } = await fetchRequestsFiltered();
  return (
    <div className="container mx-auto">
      <NavigationBar />
      <div className="h-[825px] mt-10 mb-20 mx-48 p-10 bg-white rounded-3xl">
        <AdminDashboard requests={requests} totalPages={totalPages} />
      </div>
    </div>
  );
}
