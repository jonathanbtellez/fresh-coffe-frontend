import { createContext , useState} from "react";
import { categorias } from "../data/categories";

const CoffeContext = createContext();

const CoffeProvider = ({ children }) => {
  const [categories, setCategories] = useState(categorias)
  const [currentCategory, setCurrentCategory] = useState(categorias[0])
  const handleClickCategory = (id) => {
    const category = categorias.filter(category => category.id === id)[0]
    setCurrentCategory(category)
  }


  return (
    <CoffeContext.Provider 
      value={{
        categories,
        currentCategory,
        handleClickCategory
      }}>
        {children}
    </CoffeContext.Provider>)
};

export { CoffeProvider };

export default CoffeContext;
