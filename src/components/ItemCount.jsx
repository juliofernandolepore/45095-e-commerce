import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const ItemCount = ({stock, onAdd}) => {
  const ButtonCount = styled.button `
    color: white;
    background-color: black;
    padding: 0.3rem 1rem;
    margin: 0.3rem;
    border-radius: 0.2rem;
  `
  const Finalizar = styled.button `
    color: white;
    background-color: #b61212;
    padding: 0.2rem 0.8rem;
    border-radius: 0.2rem;
  `

  const [items, setItems] = useState (1);
  const [itemStock, setItemStock] = useState(stock);  
  const [itemAgregado, setItemAgregado] = useState(false);

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
      setItemStock(itemStock - items);
      setItems(1);
      setItemAgregado(true);
      onAdd(items);
    }
  }
  useEffect(()=>{
    setItemStock(stock);
  }, [stock]);

  return (
    <div className="container">
      <div className="row my-1">
        <div className="col">
          <div className="btn-group">
              <ButtonCount onClick={funcionDecrementarStock}>-</ButtonCount>
              <ButtonCount>{items}</ButtonCount>
              <ButtonCount onClick={funcionIncrementarStock}>+</ButtonCount>
          </div>
        </div>
      </div>
      <div className="row my-1">
        <div className="col">
          <div className="btn-group">
              {itemAgregado ? <Link to={"/cart"}> <Finalizar>Finalizar compra</Finalizar> </Link> : <Finalizar onClick={addToCart}> Agregar a carrito </Finalizar>}
          </div>
        </div>
      </div>       
    </div>
  );
};

export default ItemCount;
