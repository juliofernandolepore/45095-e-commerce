import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) =>{

    if(existencia(item.index)){
      let posicion = cart.findIndex(e => e.index === item.index)      
      cart[posicion].quantity += quantity;
      setCart([...cart]);
    }else{      
      setCart([...cart, {...item, quantity:quantity}])
    }
  }

  const removeItem = (itemId) =>{
     const filtrado = cart.filter(item => item.index !== itemId);      
      setCart([...filtrado]);
  }

  const limpiar =()=>{    
    setCart([]);
  }
  
  const existencia = (itemId) => {    
      return cart.some(item=> item.index === itemId);
  }  

  const cartTotal = ()=>{
    return cart.reduce((acc, item)=> acc += item.quantity, 0);
  }

  const cartSum = ()=>{
    return cart.reduce((acc, item ) => acc += item.quantity * item.precio, 0)

  }

  return (
    <CartContext.Provider value={{cart, addItem, removeItem, limpiar, cartTotal, cartSum}}>
      {children}
    </CartContext.Provider>    
  )
}

export default CartContextProvider;