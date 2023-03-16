import { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail =({item})=> {
  const {agregarItem} = useContext(CartContext) 

  const agregar = (cantidad) =>{
    agregarItem(item, cantidad)
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col"><img src={item.thumbnail} alt={item.title} width={120} /></div>
            
          </div>
        </div>
        <div className="col">
          <h1>{item.title}</h1>
          <p>{item.price}</p>
          <ItemCount stock={item.stock} agregar={agregar}/>
        </div>
      </div>
      </div>    
  )
}

export default ItemDetail
