/* CARRITO DE COMPRAS (widget) */
import { Link } from "react-router-dom";
import cart from "../images/cart.svg";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CardWidget = () => {
  const{carTotal} = useContext(CartContext)
  return (
    <>
    <Link to={'/cart'}>
      <div className="bg-green-400 w-14 m-1 p-1 rounded text-center">        
          <img src={cart} alt={"compras en proceso"} width={15} />{carTotal()}
        <span className="position-absolute top-0 start-100 traslate-middle badge rounded-pill bg-danger">{}</span>
      </div>
      </Link>
    </>
  );
};

export default CardWidget;
