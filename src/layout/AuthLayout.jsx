import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <main className="max-w-4xl m-auto mt-10 md:mt-20 flex flex-col md:flex-row items-center">
      
      <img className="opacity-30, grayscale max-w-xs" src="../img/logo.svg" alt="Fresh coffe logo" />
      <div className="p-10 w-full md:ms-6">
        <Outlet />
        <nav>

        </nav>
      </div>
    </main>
  )
}
