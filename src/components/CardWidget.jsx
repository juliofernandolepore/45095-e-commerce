import styled from "styled-components";
import { Link } from "react-router-dom";
import cart from "../images/cart.svg";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CardWidget = () => {
  const LinkCart = styled.div `
    background-color: green;
    padding: 0.7rem;
    border-radius: 0.7rem;
    height: 50px;
    width: 50px;
    position: absolute;
    top: 0;
    left: 15px;
  `;
  const SpanCart = styled.span `
    color: white;
    padding: 0.7rem;
    margin: 0.7rem;    
  `;
  const {cartTotal} = useContext(CartContext);

  return (
    
    (cartTotal() > 0) ? <LinkCart><Link to={"/cart"}>        
        <img src={cart} alt={"carrito"} width={18} />
        <SpanCart>{cartTotal()}</SpanCart>
       </Link></LinkCart> : ""
       )  
}

export default CardWidget;
