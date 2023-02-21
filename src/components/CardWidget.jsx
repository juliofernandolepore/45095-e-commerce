/* CARRITO DE COMPRAS */
import { NavLink } from "react-router-dom";
import cart from "../images/cart.svg";

const CardWidget = () => {
  return (
    <>
    <NavLink to={'/Carrito'} activeClassName="currentCategory" className="text-white">
      <div className="bg-green-400 w-14 m-1 p-1 rounded text-center">
        <button type="button">
          <img src={cart} alt={"compras en proceso"} width={15} />1
        </button>
      </div>
      </NavLink>
    </>
  );
};

export default CardWidget;
