export default function Category({ category }) {
  const { icono, /*id,*/ nombre } = category;
  return (
    <div className="flex items-center gap-4 border text-gray-600 w-full p-3 hover:text-white hover:bg-gray-600 cursor-pointer">
     <img
        className="w-12"
        src={`/img/icono_${icono}.svg`}
        alt="Image logo" />
        <p className="text-lg font-bold cursor-pointer truncate  ">{nombre}</p>
    </div>
  );
}
