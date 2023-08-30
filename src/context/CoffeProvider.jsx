import { createContext, useState, useEffect } from "react";

import { toast } from "react-toastify";

import {categorias} from '../data/categories'

import clientAxios from "../config/axios";

const CoffeContext = createContext();

const CoffeProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});
  const [modal, setModal] = useState(false);
  const [product, setProduct] = useState({});
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0)

  useEffect(()=>{
    const updatedTotal = order.reduce((total, product)=>(product.precio * product.quantity)+total, 0)
    setTotal(updatedTotal)
  }, [order])

  const getCategories = async ()=> {
    try {
      const {data} = (await clientAxios.get(`/api/categories`)).data
      setCategories(data);
      setCurrentCategory(data[0])
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getCategories()
  },[])

  const handleClickCategory = (id) => {
    const category = categorias.filter((category) => category.id === id)[0];
    setCurrentCategory(category);
  };

  const handleClickModal = () => {
    setModal(!modal);
  };

  const handleSetProducto = (product) => setProduct(product);

  const handleAddOrder = ({ categoria_id, ...product }) => {
    if (order.some((o) => o.id === product.id)) {
      const newOrder = order.map((o) => (o.id === product.id ? product : o));
      setOrder(newOrder);
      toast.info("Pedido actualizado");
    } else {
      setOrder([...order, product]);
      toast.success("Agregado al pedido");
    }
  };

  const handleDeleteOrder = id => {
    setOrder(order.filter(o => o.id !== id))
    toast.warn('Producto eliminado')
  }

  const handleEditQuantity = (id) => {
    const updatedProduct = order.filter((o) => o.id === id)[0];
    setProduct(updatedProduct);
    setModal(!modal)
  };

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
        handleAddOrder,
        handleEditQuantity,
        handleDeleteOrder,
        total
      }}
    >
      {children}
    </CoffeContext.Provider>
  );
};

export { CoffeProvider };

export default CoffeContext;
