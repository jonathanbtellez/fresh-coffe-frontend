import useCoffe from "../hooks/useCoffe";

export default function Category({ category }) {
  const {handleClickCategory, currentCategory} = useCoffe()  
  const { icono, id, nombre } = category
  const categoryActive = () => currentCategory.id === id ? "text-white bg-gray-600": ""
  
  return (
    <button 
      onClick={()=>handleClickCategory(id)} 
      className={`flex items-center gap-4 border text-gray-600 w-full p-3 cursor-pointer hover:text-white hover:bg-gray-600 ${categoryActive()}`}>
     <img
        className="w-12"
        src={`/img/icono_${icono}.svg`}
        alt="Image logo" />
        <p className="text-lg font-bold cursor-pointer truncate  ">{nombre}</p>
    </button>
  );
}
