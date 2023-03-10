import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

const ItemCount = ({stock, agregar}) => {
  const {items, setItems} = useState (1);
  const {itemStock, setItemStock} = useState(stock)
  /* estado para conditional render del boton agregar | finalizar compra */
  const {itemAgregado, setItemAgregado} = useState(false)

  const funcionIncrementarStock = ()=>{
    if (items < itemStock){
      setItems(items + 1)
    }
  }
  const funcionDecrementarStock = ()=>{
    if (items < 1){
      setItems(items - 1)
    }
  }

  const addToCart = () => {
    if(itemStock >= items){
      setItemStock(itemStock - items)
      setItems(1)
      setItemAgregado(true)
      agregar(items)
    }
  }
  useEffect(()=>{
    setItemStock(stock)
  }, [stock])
  return (
    <div className="container">
      <div className="row my-2">
        <div className="col">
          <div className="btn-group">
              <button className="btn btn-warning" onClick={funcionDecrementarStock}>-</button>
              <button className="btn btn-warning">{items}</button>
              <button className="btn btn-warning" onClick={funcionIncrementarStock}>+</button>
          </div>
        </div>
      </div>
      <div className="row my-2">
        <div className="col">
          <div className="btn-group">
              {itemAgregado ? <Link to={"/carrito"} className="btn btn-warning">finalizar compra</Link> :
              <button className="btn btn-warning" onClick={addToCart}>agregar a carrito</button>}
          </div>
        </div>
      </div>       
    </div>
  );
};

export default ItemCount;
