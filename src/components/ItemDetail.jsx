import { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import styled from "styled-components";

const ItemDetail =({item})=> {
  const {addItem} = useContext(CartContext); 
  const onAdd = (quantity) =>{
    addItem(item, quantity);
  }
  const DescripcionJuego = styled.p `
    color: brown;
    font-weight:600;
  `
  const ImagenJuego = styled.img `
    border-radius: 0.3rem;
    border: solid black 2px;
  `
  return (
    <div className="container m-5">
      <div className="row my-5">
        <div className="col d-flex align-items-center justify-end">
            <ImagenJuego src={item.imagen} alt={item.nombre}/>            
          </div>
        <div className="col d-flex align-items-center">
        <div>
          <h1>Titulo: <b>{item.nombre}</b></h1>
          <p>Plataforma: <b>{item.plataforma}</b></p>
          <DescripcionJuego>{item.descripcion}</DescripcionJuego>
          <p> Precio: <b>${item.precio}</b></p>
          <ItemCount stock={item.stock} onAdd={onAdd}/>
        </div>
      </div>
      </div>
    </div>    
  )
}

export default ItemDetail;
