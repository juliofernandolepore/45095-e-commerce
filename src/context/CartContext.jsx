import { createContext, useState } from "react"

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) =>{

    if(existencia(item.itemId)){
      let posicion = cart.findIndex(e => e.id === item.id)      
      cart[posicion].quantity += quantity;
      setCart([...cart])
    }else{      
      setCart([...cart, {...item, quantity:quantity}])
    }
  }

  const removeItem = (itemId) =>{
     const filtrado = cart.filter(item=>item.id !== itemId);      
      setCart([...filtrado]);
  }

  const limpiar =()=>{    
    setCart([]);
  }
  
  const existencia = (itemId) => {    
      return cart.some(item=> item.id === itemId)
  }  

  const totalWidget = ()=>{
    return cart.reduce((acc, item)=> acc += item.quantity, 0)
  }

  const cartTotal = ()=>{
    return cart.reduce((acc, item)=> acc += item.quantity * item.price, 0)
  }

  const cartSum = ()=>{
    return cart.reduce((acc, item ) => acc += item.quantity * item.price, 0)

  }

  return (
    <CartContext.Provider value={{cart, addItem, removeItem, limpiar, totalWidget, cartTotal, cartSum}}>
      {children}
    </CartContext.Provider>    
  )
}

export default CartContextProvider;