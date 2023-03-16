import { createContext, useState } from "react"
export const CartContext = createContext()

const CartContextProvider = ({propiedadesContexto}) => {
  const {carrito, setCarrito} = useState([]);
  const agregarItem = (item, cantidad) =>{
    if(verificacionSiEstaEnCarrito(item.itemId)){
      let posicion = carrito.findIndex(e => e.id === item.id)      
      carrito[posicion].cantidad += cantidad;
      setCarrito([...carrito])
    }else{      
      setCarrito([...carrito, {...item, cantidad:cantidad}])
    }
  }

  const eliminarItem = (itemId) =>{
     const resultadoFiltrado = carrito.filter(item=>item.id !== itemId)      
      setCarrito([...resultadoFiltrado]);
  }

  const limpiar =()=>{    
    setCarrito([]);
  }
  
  const verificacionSiEstaEnCarrito = (itemId) => {    
      return carrito.some( item=> item.id === itemId)
  }  

  const totalWidget = ()=>{
    return carrito.reduce((acumulador, item)=> acumulador += item.cantidad, 0)
  }

  const carritoTotal = ()=>{
    return carrito.reduce((acumulador, item)=> acumulador += item.cantidad * item.precio, 0)
  }

  const carritotSuma = ()=>{
    return carrito.reduce((acumulador, item ) => acumulador += item.cantidad * item.precio, 0)

  }

  return (
    <CartContext.Provider value={{carrito, agregarItem, eliminarItem, limpiar, totalWidget, carritoTotal, carritotSuma}}>
      {propiedadesContexto}
    </CartContext.Provider>    
  )
}

export default CartContextProvider