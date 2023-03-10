import { useEffect, useState } from "react";

const ItemCount = () => {
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

  const funcionAgregar = () => {
    if(itemStock >= items){
      setItemStock(itemStock - items)
      setItems(1)
      setItemAded(true) 
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
              {itemAgregado ? <Link to={"/cart"} className="btn btn-warning">finalizar compra</Link> :
              <button className="btn btn-warning" onClick={funcionAgregar}>agregar a carrito</button>}
          </div>
        </div>
      </div>       
    </div>
  );
};

export default ItemCount;
