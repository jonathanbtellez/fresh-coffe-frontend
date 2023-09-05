import { Outlet } from "react-router-dom";
import AdminSideBar from "../components/AdminSideBar";
import { useAuth } from "../hooks/useAuth";

export default function AdminLayout() {
  useAuth({ middleware: "admin" });
  return (
    <>
      <div className="md:flex">
        <AdminSideBar />
        <main className="flex-1 h-screen overflow-y-scroll bg-gray-100 p-12">
          <Outlet />
        </main>
      </div>
    </>
  );
}
