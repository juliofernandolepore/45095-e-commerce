/* CARRITO DE COMPRAS */
import cart from "../images/cart.svg";

const CardWidget = () => {
  return (
    <>
      <div className="bg-green-400 w-14 m-1 p-1 rounded text-center">
        <button type="button">
          <img src={cart} alt={"compras en proceso"} width={15} />1
        </button>
      </div>
    </>
  );
};

export default CardWidget;
