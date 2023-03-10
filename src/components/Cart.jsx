import { useContext } from "react"
import {CartContext} from "../context/CartContext"

/* despliegue del contenido del carrito en detalle */

const Cart = () => {
  const {carrito, carTotal} = useContext(CartContext);

  if(carTotal() === 0){
    return <div className="alert alert-warning text-center" role="alert">
      el carrito esta vacio
    </div>
  }

  return (
    <div>Cart</div>
  )
}

export default Cart