import {db} from "../firebase/index";
import { useContext, useState } from "react"
import { CartContext} from "../context/CartContext"
import { collection, addDoc } from "firebase/firestore";
import { Navigate } from "react-router";
import swal from 'sweetalert';
import styled from "styled-components";

const Checkout = () => {  
      
      const [nombre, setNombre] = useState("");
      const [email, setEmail] = useState("");
      const [telefono, setTelefono] = useState(""); 
      const [orderId, setOrderId] = useState("");
      const {cart, limpiar, cartSum} = useContext(CartContext);
      const FinalizarH1 = styled.h1 `
            color: white;
            background-color: red;
            border-radius: 0.3rem;
            text-align: center;
            padding: 0.5rem 0.2rem;
            margin: 1rem;  
        `;  
      const generarOrden = ()=>{
        
        const buyer = {name:nombre, email:email, phone:telefono};
        const fecha = new Date();
        const date = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
        const order = {buyer:buyer, items:{cart}, date:date, total:cartSum()};

        if (nombre.length === 0){
            swal("Atencion!", "debes ingresar tu nombre!", "warning")
            return false;
        }

        if (email.length === 0){
            swal("Atencion!", "debes ingresar un correo electronico!", "warning")
            return false;
        }

        if (telefono.length === 0){
            swal("Atencion!", "debes ingresar un numero telefono!", "warning")
            return false;
        }
        
        const coleccionDeOrdenes = collection(db, "ordenes");
        addDoc(coleccionDeOrdenes, order).then(data => {
                setOrderId(data.id)
                limpiar();
        });        

      }
        
      return (
        <div className="container my-5">
        <div className="row">
            <FinalizarH1>Finalizar el proceso de compra </FinalizarH1>
            <div className="col-md-3">
                <form>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" onInput={(e) => {setNombre(e.target.value)}} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="text" className="form-control" id="email" onInput={(e) => {setEmail(e.target.value)}} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="telefono" className="form-label">Teléfono</label>
                        <input type="text" className="form-control" id="telefono" onInput={(e) => {setTelefono(e.target.value)}} />
                    </div>
                    <button type="button" className="btn btn-warning" onClick={generarOrden}>Generar Orden</button>
                </form>
            </div>
            <div className="col-md-9">
                <table className="table">
                    
                    {
                        cart.map(item => ( 
                            <tr key={item.id}>
                                <td className="text-start" width="10%"><img src={item.imagen} alt={item.nombre} width={120} /></td>
                                <td className="text-start align-middle" width="40%">{item.nombre}</td>
                                <td className="text-center align-middle" width="20%">Unid. <b>{item.quantity}</b> x ${item.precio}</td>
                                <td className="text-center align-middle" width="20%">${item.quantity * item.precio}</td>
                                
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
        {orderId? <Navigate to={"/gracias/" + orderId }/> : ""}      
    </div>
    )
    }

export default Checkout;