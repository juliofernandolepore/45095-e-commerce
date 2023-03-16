import { useContext } from "react"
import {CartContext} from "../context/CartContext"
import basura from "../images/basura.svg"
import {Link} from "react-router-dom"
import swal from "sweetalert"

const Cart = () => {   
  const {carrito, eliminarItem, limpiar, carritoTotal, carritotSuma} = useContext(CartContext); 

  if(carritoTotal() === 0){
    swal("Ups!", "No existen productos en tu carrito!", "warning");
    return <div className="alert alert-warning text-center" role="alert">
      Tu carrito esta vacio
    </div>
  }

  return (
    
        <div className="col-md-9">
            <table className="table">
                <tr>
                    <td className="text-end" colSpan={5}><Link className="btn btn-warning bg-warning" onClick={() => {limpiar()}}>Vaciar Carrito</Link></td>
                </tr>
                {
                    carrito.map(item => ( 
                        <tr key={item.id}>
                            <td className="text-start" width="10%"><img src={item.imagen} alt={item.nombre} width={120} /></td>
                            <td className="text-start align-middle" width="40%">{item.nombre}</td>
                            <td className="text-center align-middle" width="20%">{item.cantidad} x ${item.precio}</td>
                            <td className="text-center align-middle" width="20%">${item.cantidad * item.precio}</td>
                            <td className="text-end align-middle" width="10%"><button type="button" className="btn btn-warning bg-warning" 
                            onClick={() => {eliminarItem(item.id)}} title={"Eliminar Item"}>
                            <img src={basura} alt={"Eliminar Producto"} width={32} /></button></td>
                        </tr>
                    ))
                }
                <tr>
                    <td colSpan={2}>&nbsp;</td>
                    <td className="text-center">Total a Pagar</td>
                    <td className="text-center"><b>${carritotSuma()}</b></td>
                    <td className="text-emd"> <Link to={"/checkout"} className="btn btn-warning bg-warning"> Finaliza tu Compra</Link></td>
                </tr>
            </table>
        </div>
  
)
}

export default Cart