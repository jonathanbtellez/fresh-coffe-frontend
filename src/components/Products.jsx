import { moneyFormat } from "../helpers";
import useCoffe from "../hooks/useCoffe";

export default function Products({
  product,
  addButton = false,
  availableButton = false,
}) {
  const { nombre, imagen, precio } = product;
  const { handleClickModal, handleSetProducto } = useCoffe();
  const { handleClickProductSpent } = useCoffe();

  console.log(addButton);

  return (
    <div className="border p-2 shadow bg-white">
      <img
        src={`/img/${imagen}.jpg`}
        alt={`imagen ${nombre}`}
        className="w-full"
      />

      <div className="p-5">
        <h3 className="2xl font-bold">{nombre}</h3>
        <p className="mt-5 font-black text-3xl text-gray-700">
          {moneyFormat(precio)}
        </p>

        {addButton && (
          <button
            type="button"
            onClick={() => {
              handleSetProducto(product);
              handleClickModal();
            }}
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
          >
            Agregar
          </button>
        )}
        {availableButton && (
          <button
            type="button"
            onClick={() => {
              handleClickProductSpent(product.id);
            }}
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
          >
            Producto agotado
          </button>
        )}
      </div>
    </div>
  );
}
