import Category from "./Category";
import useCoffe from "../hooks/useCoffe";
export default function SideBar() {
  const { categories } = useCoffe();
  return (
    <aside className="md:w-72 h-screen overflow-y-scroll">
      <div className="p-4">
        <img
          className="opacity-30, grayscale"
          src="/img/logo.svg"
          alt="Fresh coffe logo"
        />
      </div>
      <div className="mt-10" >
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
      <div className="my-5 px-5">
        <button
          type="button"
          className="bg-red-600 hover:bg-red-500 text-white w-full p-5 truncate font-bold cursor-pointer"
        >
          Cancelar orden
        </button>
      </div>
    </aside>
  );
}
