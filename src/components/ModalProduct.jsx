import useCoffe from "../hooks/useCoffe";
import { moneyFormat } from "../helpers";
import { useState } from "react";

export default function ModalProduct() {
  const { handleClickModal, product, handleAddOrder } = useCoffe();
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div className="md:flex gap-10 items-center">
        <div className="md:w-1/3">
          <img
            src={`/img/${product.imagen}.jpg`}
            alt={`Imagen producto ${product.nombre}`}
          />
        </div>
        <div className="md:w-2/3">
          <div className="flex justify-end">
            <button onClick={handleClickModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
          <h2 className="text-3xl">{product.nombre}</h2>
          <p className="mt-5 font-black text-4xl text-gray-600">
            {moneyFormat(product.precio)}
          </p>

          <div className="flex gap-4 mt-5">
            <button
              type="button"
              onClick={() => {
                if (quantity <= 1) return;
                setQuantity(quantity - 1);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            <p className="text-2xl">{quantity}</p>
            <button
              type="button"
              onClick={() => {
                if (quantity >= 5) return;
                setQuantity(quantity + 1);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
          <button
            className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 font-bold text-white uppercase rounded"
            onClick={() => {
              handleAddOrder({ ...product, quantity })
              handleClickModal()
            }}
          >
            Anadir al pedido
          </button>
        </div>
      </div>
    </>
  );
}
