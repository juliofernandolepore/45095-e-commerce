import { useContext, useState } from "react"
import {CartContext} from "../context/CartContext"
import basura from "../images/basura.svg"
import {Link} from "react-router-dom"
import { getFirestore , collection, addDoc } from "firestore/firestore";

/* despliegue del contenido del carrito en detalle */

const Cart = () => {
  /* declaro las variables para almacenar los values capturados del input y los trabajo con un hook */
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState(""); 
  const [ordenId, setOrdenId] = useState("");
  const {carrito, eliminarItem, borrarTodo, cartTotal, cartSum} = useContext(CartContext);
    /* funcion para crear objetos con las constantes generadas en los hooks */
  const generarOrden = ()=>{
    const comprador = {nombre:nombre, correo:correo, telefono:telefono}
    const fecha = new Date();
    const fechaDeCompra =  `${fecha.getHours()} ${fecha.getMinutes()} ${fecha.getSeconds()} ${fecha.getDay()} ${fecha.getMonth() + 1} ${fecha.getFullYear()}` 
    const orden = {comprador:comprador, items:{carrito}, fecha:fechaDeCompra, total:cartSum()};
    /* conexion a la base de datos a la coleccion ordenes */
    const conexionDb = getFirestore();
    const coleccionDeOrdenes = collection(conexionDb, "ordenes");
    addDoc(coleccionDeOrdenes, orden).then(data => {
            setOrdenId(data.id)
    });
  }

  if(carTotal() === 0){
    return <div className="alert alert-warning text-center" role="alert">
      el carrito esta vacio
    </div>
  }

  return (
    <div className="container my-5">
    <div className="row">
        <h1 className="text-center">Tu Seleccion</h1>
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
                <tr>
                    <td className="text-end" colSpan={5}><Link className="btn btn-warning bg-warning" onClick={() => {borrarTodo()}}>Vaciar Carrito</Link></td>
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
                    <td className="text-center"><b>${carTotal()}</b></td>
                    <td>&nbsp;</td>
                </tr>
            </table>
        </div>
    </div>
    <div className="row my-3">
        <div className="col-md-12">
            {ordenId ? <div class="alert alert-warning text-center" role="alert"><h3>Gracias por tu Compra!</h3><p>Se generó una Orden de Compra con el ID: <b>{ordenId}</b></p></div> : ""}
        </div>
    </div>
</div>
)
}

export default Cart