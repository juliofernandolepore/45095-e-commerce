import {db} from "../firebase/index";
import { useContext, useState } from "react"
import { CartContext} from "../context/CartContext"
import { collection, addDoc } from "firebase/firestore";
import { Navigate } from "react-router";
import styled from "styled-components";

const Checkout = () => { 
    
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");
    const {cart, limpiar, cartSum} = useContext(CartContext);

    const generarOrden = () => {
        const buyer = {name:nombre, email:email, phone:telefono};
        const fecha = new Date();
        const date = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
        const order = {buyer:buyer, items:{cart}, date:date, total:cartSum()};

        if (nombre.length === 0) {
            return false;
        }

        if (email.length === 0) {
            return false;
        }

        if (telefono.length === 0) {
            return false;
        }


        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(data => {
            setOrderId(data.id);
            limpiar();
        });
    }
        const FinalizarCompraH1 = styled.h1 `
        color: white;
        background-color: red;
        padding: 1rem;
        margin-left: 1rem;
        margin-top: 1rem;
        font-weight: 700;
        `
        const ImagenCompra = styled.img `
            margin: 2rem;
            border-radius: 0.2rem;
            border: solid red 2px;
        `
        const TituloJuego = styled.td `
          color: red;
          font-size: 2rem;
          font-weight: 600;
          padding-left: 2rem;  
        `;
        const TotalPagar = styled.b `
            color: red;
            font-size: 1rem;
            font-weight: 800;
        `

    return (
        <div className="container my-5">
            <div className="row">
                <FinalizarCompraH1>Finalizar Compra</FinalizarCompraH1>
                <div>
                    <form>
                        <div class="mb-3">
                            <label htmlFor="nombre" class="form-label">Nombre</label>
                            <input type="text" class="form-control" id="nombre" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="email" class="form-label">Email</label>
                            <input type="text" class="form-control" id="email" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="telefono" class="form-label">Teléfono</label>
                            <input type="text" class="form-control" id="telefono" onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>
                        <button type="button" class="btn btn-warning" onClick={generarOrden}>Comprar y Generar Orden</button>
                    </form>                
            </div>
            <div className="col-md-9">
                <table className="table">
                    
                    {
                        cart.map(item => ( 
                            <tr key={item.id}>
                                <td className="text-start" width="10%"><ImagenCompra src={item.imagen} alt={item.nombre} width={120} /></td>
                                <TituloJuego className="text-start align-middle" width="40%">{item.nombre}</TituloJuego>
                                <td className="text-center align-middle" width="20%">Unid. <b>{item.quantity}</b> x ${item.precio}</td>
                                <td className="text-center align-middle" width="20%">${item.quantity * item.precio}</td>
                                
                            </tr>
                        ))
                    }
                    <tr>
                        <td colSpan={2}>&nbsp;</td>
                        <td className="text-center">Total a Pagar</td>
                        <td className="text-center"><TotalPagar>${cartSum()}</TotalPagar></td>
                
                    </tr>
                </table>
            </div>
        </div>
        {orderId? <Navigate to={"/gracias/" + orderId }/> : ""}      
    </div>
    )
    }

export default Checkout;