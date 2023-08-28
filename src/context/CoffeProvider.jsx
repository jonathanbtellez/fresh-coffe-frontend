import { createContext , useState} from "react";
import { categorias } from "../data/categories";

const CoffeContext = createContext();

const CoffeProvider = ({ children }) => {
  const [categories, ] = useState(categorias)
  const [currentCategory, setCurrentCategory] = useState(categorias[0])
  const [modal, setModal] = useState(false)
  const [product, setProduct] = useState({})
  const [order, setOrder] = useState([])


  const handleClickCategory = (id) => {
    const category = categorias.filter(category => category.id === id)[0]
    setCurrentCategory(category)
  }

  const handleClickModal = () =>{
    setModal(!modal)
  }

  const handleSetProducto = product => setProduct(product)


  const handleAddOrder = ({categoria_id, imagen, ...product}) =>{
    setOrder([...order, product])
  }

  return (
    <CoffeContext.Provider 
      value={{
        categories,
        currentCategory,
        handleClickCategory,
        modal,
        handleClickModal,
        product,
        handleSetProducto,
        order,
        setOrder,
        handleAddOrder
      }}>
        {children}
    </CoffeContext.Provider>)
};

export { CoffeProvider };

export default CoffeContext;
