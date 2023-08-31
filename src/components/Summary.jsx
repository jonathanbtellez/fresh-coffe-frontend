import { moneyFormat } from "../helpers";
import useCoffe from "../hooks/useCoffe";
import SumaryOrder from "./SumaryOrder";

export default function Summary() {
  const { order, total, handleSubmitNewOrder } = useCoffe();

  const checkOrder = () => order.length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitNewOrder();
  };
  return (
    <aside className="md:w-72 h-screen overflow-y-scroll p-5">
      <h1 className="text-3xl font-black">Mi pedido</h1>
      <p className="text-lg my-5">
        Aqui podras ver el resumen y totales de tu pepido{" "}
      </p>
      <div className="py-10">
        {order.length === 0 ? (
          <p className="text-center text-2xl">
            No hay elementos en tu pedido aun
          </p>
        ) : (
          order.map((o) /*order*/ => <SumaryOrder key={o.id} order={o} />)
        )}
      </div>
      <p className="text-xl mt-10">Total: {moneyFormat(total)}</p>

      <form className="w-full" onSubmit={handleSubmit}>
        <div className="mt-5">
          <input
            type="submit"
            disabled={checkOrder()}
            className={`${
              checkOrder()
                ? "bg-slate-300 "
                : "bg-indigo-600 hover:bg-indigo-800"
            } px-5 py-2 rounded uppercase font-bold cursor-pointer text-white text-center w-full`}
            value="Confirmar pedido"
          />
        </div>
      </form>
    </aside>
  );
}
