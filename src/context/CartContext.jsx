import { createContext, useState } from "react"
/* este export hara que el context pueda ser utilizado por toda la app */
export const CartContext = createContext()
/* envolver componentes con Provider que utilizaran sus servivios, esos
componentes envueltos adquieren la calidad de hijos */
const CartContextProvider = ({propiedadesContexto}) => {
  /* useState para manejar el contenido del carrito */
  const {carrito, setCarrito} = useState([]);
  const funcionAgregarItem = (item, cantidad) =>{
    if(verificacionSiEstaEnCarrito(item.itemId)){
      let posicion = carrito.findIndex(e => e.id === item.id)
      /* se van agregando indices del mismo producto de forma acumulativa */
      carrito[posicion].cantidad += cantidad;
      setCarrito([...carrito])
    }else{
      /* uso de la propiedad spread operator, para sobreescribir el contenido
      de carrito con los nuevos items */
      setCarrito([...carrito, {...item, cantidad:cantidad}])
    }
  }

  const eliminarItem = (itemId) =>{
     const resultadoFiltrado = carrito.filter(item=>item.id !== itemId)
      /* reeemplazo el contenido de carrito con el array generado en el
      filter, de todos los elementos disntintos el item seleccionado
      para eliminar, entonces devuelve un carrito sin el item que ya no deseo */
      setCarrito([resultadoFiltrado])
  }

  const borrarTodo =()=>{
    /* con esta funcion logro establecer un array vacio para la variable
    del carrito, ya que deseo borrar todo lo que contiene. */
    setCarrito([]);
  }
  /* funcion verificadora de condicion (bool) */
  const verificacionSiEstaEnCarrito = (itemId) => {
    /* el metodo some retorna true o false dependiendo del
    callback, si lo contiene o no(?) */
      return carrito.some( item=> item.id === itemId)
  }

  /* funcion utilitaria para el widget carrito (mini) */

  const totalWidget = ()=>{
    return carrito.reduce((acumulador, item)=> acumulador += item.cantidad, 0)
  }

  const carTotal = ()=>{
    return carrito.reduce((acumulador, item)=> acumulador += item.cantidad * item.precio, 0)
  }
  return (
    <CartContext.Provider value={{carrito, funcionAgregarItem, eliminarItem, borrarTodo, totalWidget, carTotal}}>
      {propiedadesContexto}
    </CartContext.Provider>
    
  )
}

export default CartContextProvider