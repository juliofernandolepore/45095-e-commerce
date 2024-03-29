import { useContext } from "react";
import {CartContext} from "../context/CartContext";
import basura from "../images/basura.svg";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Cart = () => {
       
  const {cart, removeItem, limpiar, cartTotal, cartSum} = useContext(CartContext); 
  const SeleccionTitulo = styled.h1 `
    color: black;
    background-color:green;
    border-radius: 0.2rem;
    padding: 1rem;
    margin: 1rem;
    font-weight: 700;
  ` ;
  const CarritoVacio = styled.h3 `
    color: black;
    background-color: red;
    font-size: 2rem;
    font-weight: 600;
    border-radius: 0.5rem;
    padding: 1.5rem;
    margin: 3rem;    
  ` ;
  const ConfirmarProceso = styled.button `
    color: white;
    font-weight: 700;
    background-color: green;
    border-radius: 0.3rem;
    margin: 0.5rem;
    padding: 0.3rem;
  `;

  const BotonVaciar = styled.button `
    color: white;
    background-color: red;
    border-radius: 0.3rem;
    margin-right: 2rem;
    padding: 1rem;
  `;
  const TachoImagen = styled.img `
    margin-right: 3rem;
  `;
  const TituloJuego = styled.td`
    color: black;
    font-size: 2rem;
    font-weight: 600;
    margin-left: 2rem;
    padding-left: 2rem; 
  `;
  const MicroImg = styled.img `
    border: black solid 2px;
    border-radius: 0.2rem;
    margin-left: 1rem;
  `

  if(cartTotal() === 0){
    
    return (

    <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <CarritoVacio>El carrito de compras esta vacio!</CarritoVacio>
                </div>
            </div>
    </div>)    
  }
  
  return (    
    <div className="container my-5">
    <div className="row">
        <SeleccionTitulo>Productos Seleccionados</SeleccionTitulo>
        <div className="col-md-12">
            <table className="table">
                <tr>
                    <td className="text-end" colSpan={5}><BotonVaciar><Link onClick={() => {limpiar()}}>Vaciar Carrito</Link></BotonVaciar></td>
                </tr>
                {
                    cart.map(item => ( 
                        <tr key={item.index}>
                            <td className="text-start" width="10%"><MicroImg src={item.imagen} alt={item.nombre} width={120} /></td>
                            <TituloJuego>{item.nombre}</TituloJuego>
                            <td className="text-center align-middle" width="20%">{item.quantity} x ${item.precio}</td>
                            <td className="text-center align-middle" width="20%">${item.quantity * item.precio}</td>
                            <td className="text-end align-middle" width="20%"><button type="button" className="btn btn-warning bg-warning" onClick={() => {removeItem(item.index)}} title={"Eliminar Producto"}><TachoImagen src={basura} alt={"Eliminar Producto"} width={32} /></button></td>
                        </tr>
                    ))
                }
                <tr>
                    <td colSpan={2}>&nbsp;</td>
                    <td className="text-center">Total a Pagar</td>
                    <td className="text-center"><b>${cartSum()}</b></td>
                    <td className="text-end"><Link to={"/checkout"}> <ConfirmarProceso> confirmar seleccion y continuar proceso </ConfirmarProceso> </Link> </td>
                </tr>
            </table>
        </div>
    </div>
</div>
  
)
}

export default Cart;