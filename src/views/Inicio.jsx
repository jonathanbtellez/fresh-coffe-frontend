import Products from "../components/Products";
import { RotatingLines } from "react-loader-spinner";
import useSWR from "swr";
import useCoffe from "../hooks/useCoffe";
import clientAxios from "../config/axios";

export default function Inicio() {
  const { currentCategory } = useCoffe();

  const fetcher = () => clientAxios("api/products").then((data) => data.data);

  const { data, error, isLoading } = useSWR("api/products", fetcher, {
    refreshInterval: 1000
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

  const listProducts = data.data.filter(
    (producto) => producto.category_id === currentCategory.id
  );
  return (
    <div className="p-8">
      <div>
        {/* <Spinner name="double-bounce" /> */}
        <h1 className="text-4xl font-black">{currentCategory.nombre}</h1>
        <p className="text-2xl my-10">
          Elige y personaliza tu pedido a continuacion
        </p>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {listProducts.map((product) => (
          <Products key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
