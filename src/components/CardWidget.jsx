import { Link } from "react-router-dom";
import cart from "../images/cart.svg";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CardWidget = () => {
  const { cartTotal } = useContext(CartContext);

  return (
    <>
    {cartTotal() > 0 ? 
    <Link to={"/cart"}>
      <div className="bg-green-400 w-14 m-1 p-1 rounded text-center">        
        <img src={cart} alt={"carrito de compras en proceso"} width={30} />{cartTotal()}
        <span className="position-absolute top-0 start-100 traslate-middle badge rounded-pill bg-danger">
          {cartTotal()}</span>
      </div> </Link> : <></>}
    </>
  )
};

export default CardWidget;
