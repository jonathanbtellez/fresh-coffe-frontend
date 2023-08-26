import { moneyFormat } from "../helpers";

export default function Products({ product }) {
  const { nombre, imagen, precio } = product;

  return (
    <div className="border p-2 shadow bg-white">
      <img
        src={`/img/${imagen}.jpg`}
        alt={`imagen ${nombre}`}
        className="w-full"
      />

      <div className="p-5">
        <h3 className="2xl font-bold">{nombre}</h3>
        <p className="mt-5 font-black text-3xl text-gray-700">{moneyFormat(precio)}</p>
      <button
        type="button"
        className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
      >Agregar</button>
      </div>

    </div>
  );
}
