import useSWR from "swr";
import clientAxios from "../config/axios.js";
import ProductsCard from "../components/Products.jsx";
import { RotatingLines } from "react-loader-spinner";

export default function Products() {
  const token = localStorage.getItem("AUTH_TOKEN");
  const fetcher = () =>
    clientAxios("/api/products", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((data) => data.data);

  const { data, error, isLoading } = useSWR("/api/products", fetcher, {
    refreshInterval: 10000,
  });
  console.log(data?.data, error, isLoading);

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

  return (
    <div>
      {/* <Spinner name="double-bounce" /> */}
      <h1 className="text-4xl font-black">Productos</h1>
      <p className="text-2xl my-10">Maneja la disponibilidad desde aqui</p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.data.map((product) => (
          <ProductsCard
            key={product.id}
            product={product}
            availableButton={true}
          />
        ))}
      </div>
    </div>
  );
}
