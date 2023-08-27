import Products from "../components/Products";
import { productos } from "../data/products";
import useCoffe from "../hooks/useCoffe";


export default function Inicio() {

  const {currentCategory} = useCoffe();
  const listProducts = productos.filter(producto => producto.categoria_id === currentCategory.id)
  return (
    <div className="p-8">
      <div>
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
