import useSWR from "swr";
import clientAxios from "../config/axios";
import { RotatingLines } from "react-loader-spinner";
import { moneyFormat } from "../helpers";
import useCoffe from "../hooks/useCoffe";

export default function Orders() {
  const token = localStorage.getItem("AUTH_TOKEN");
  const fetcher = () =>
    clientAxios("/api/orders", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

  const { handleClickCompleteOrder } = useCoffe();

  const { data, error, isLoading } = useSWR("api/orders", fetcher, {
    refreshInterval: 1000,
  });
  console.log(error);

  if (isLoading)
    return (
      <div className="h-screen flex items-center justify-center">
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="45"
          visible={true}
        />
      </div>
    );

  console.log(data.data.data);
  return (
    <div>
      <h1 className="text-4xl font-black">Ordenes</h1>
      <p className="text-2xl my-10">Administra tus Ordenes aqui</p>
      <div className="grid md:grid-cols-2  gap-5">
        {data.data.data.map((order) => (
          <div
            key={order.id}
            className="p-5 bg-white shadow space-y-2 border-b"
          >
            <p className="text-xl font-bold text-slate-600">
              Contenido del pedido:
              {order.products.map((product) => (
                <div
                  key={product.id}
                  className="border-b-slate-200 last-of-type:border-none py-4"
                >
                  <p className="text-sm">ID: {product.id}</p>
                  <p className="font-normal"> {product.nombre}</p>
                  <p className="font-normal">
                    Cantidad {""}:
                    <span className="font-bold"> {product.pivot.quantity}</span>
                  </p>
                </div>
              ))}
            </p>
            <p className="text-lg font-bold text-slate-600">
              Cliente:
              <span className="font-normal"> {order.user.name}</span>
            </p>
            <p className="text-lg font-bold text-amber-500">
              Total a pagar:
              <span className="font-normal text-slate-600">
                {" "}
                {moneyFormat(order.precio)}
              </span>
            </p>
            <div className="mt-5">
              <button
                onClick={() => handleClickCompleteOrder(order.id)}
                type="button"
                className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 rounded uppercase font-bold cursor-pointer text-white text-center w-full"
              >
                Completar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
