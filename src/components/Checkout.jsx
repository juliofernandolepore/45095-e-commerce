import { useContext, useState } from "react"
import {CartContext} from "../context/CartContext"
import { getFirestore , collection, addDoc } from "firebase/firestore";
import { Navigate } from "react-router";

const Checkout = () => {  
      
      const [nombre, setNombre] = useState("");
      const [correo, setCorreo] = useState("");
      const [telefono, setTelefono] = useState(""); 
      const [orderId, setOrdenId] = useState("");
      const {carrito,  borrarTodo, cartSum} = useContext(CartContext);
        
      const generarOrden = ()=>{
        const comprador = {nombre:nombre, correo:correo, telefono:telefono}
        const fecha = new Date();
        const fechaDeCompra =  `${fecha.getHours()} ${fecha.getMinutes()} ${fecha.getSeconds()} ${fecha.getDay()} ${fecha.getMonth() + 1} ${fecha.getFullYear()}` 
        const orden = {comprador:comprador, items:{carrito}, fecha:fechaDeCompra, total:cartSum()};
        
        const conexionDb = getFirestore();
        const coleccionDeOrdenes = collection(conexionDb, "ordenes");
        addDoc(coleccionDeOrdenes, orden).then(data => {
                setOrdenId(data.id)
                borrarTodo();
        });

        return orderId? <Navigate to={"/gracias/" + orderId }/> : "";

      }
        
      return (
        <div className="container my-5">
        <div className="row">
            <h1 className="text-center">Finalizar el proceso de compra </h1>
            <div className="col-md-3">
                <form>
                    <div class="mb-3">
                        <label htmlFor="nombre" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="nombre" onInput={(e) => {setNombre(e.target.value)}} />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="email" class="form-label">Email</label>
                        <input type="text" class="form-control" id="email" onInput={(e) => {setCorreo(e.target.value)}} />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="telefono" class="form-label">Teléfono</label>
                        <input type="text" class="form-control" id="telefono" onInput={(e) => {setTelefono(e.target.value)}} />
                    </div>
                    <button type="button" class="btn btn-warning" onClick={generarOrden}>Generar Orden</button>
                </form>
            </div>
            <div className="col-md-9">
                <table className="table">
                    
                    {
                        carrito.map(item => ( 
                            <tr key={item.id}>
                                <td className="text-start" width="10%"><img src={item.imagen} alt={item.nombre} width={120} /></td>
                                <td className="text-start align-middle" width="40%">{item.nombre}</td>
                                <td className="text-center align-middle" width="20%">{item.cantidad} x ${item.precio}</td>
                                <td className="text-center align-middle" width="20%">${item.cantidad * item.precio}</td>
                                
                            </tr>
                        ))
                    }
                    <tr>
                        <td colSpan={2}>&nbsp;</td>
                        <td className="text-center">Total a Pagar</td>
                        <td className="text-center"><b>${cartSum()}</b></td>
                        
                    </tr>
                </table>
            </div>
        </div>        
    </div>
    )
    }

export default Checkout