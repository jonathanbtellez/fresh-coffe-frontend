import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function AdminSideBar() {
  const { logout } = useAuth({ middleware: "auth" });

  return (
    <aside className="md:w-72 h-screen overflow-y-scroll flex flex-col justify-between">
      <div className="p-4">
        <img
          className="opacity-30, grayscale"
          src="/img/logo.svg"
          alt="Fresh coffe logo"
        />
      </div>
      <nav className="flex flex-col divide-y-2 text-center">
        <Link to="/admin" className="font-bold text-lg p-6 hover:text-gray-500">
          Ordenes
        </Link>
        <Link
          to="/admin/products"
          className="font-bold text-lg p-6 hover:text-gray-500"
        >
          Productos
        </Link>
      </nav>

      <div className="my-5 px-5">
        <button
          onClick={logout}
          type="button"
          className="bg-red-600 hover:bg-red-500 text-white w-full p-5 truncate font-bold cursor-pointer"
        >
          Cancelar orden
        </button>
      </div>
    </aside>
  );
}
