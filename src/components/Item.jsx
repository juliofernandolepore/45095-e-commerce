import { Link } from "react-router-dom";
const Item = ({ i }) => {
  /* COMPONENTE MAQUETADOR UNICAMENTE */
  /* componente para el maquetador o render de los elementos donde se alojaran por
    props las iteraciones  map del ItemList */


/* el atributo permalink traido en el arreglo devuelto en la api permite redireccion al producto en cuestion */    
  return (
    <>
    <Link to={"/producto/" + i.id}>
      <div className="m-3 p-5 border border-5 text-start">
          <img src={i.thumbnail} className="card-img-top" alt={i.title} />
          <div className="card-body">
            <h5 className="card-title">{i.title}</h5>
            <p className="card-text">
              <b>${i.price}</b>
            </p>
          </div>
      </div>
      </Link>
    </>
  );
};

export default Item;
