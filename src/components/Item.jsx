import { Link } from "react-router-dom";
const Item = ({ item }) => {
  
  return (
    <Link to={"/categoria/" + item.id}>
      <div className="m-3 p-5 border border-5 text-start">
          <img src={item.imagen} className="card-img-top" alt={item.nombre} />
          <div className="card-body">
            <h5 className="card-title">{item.nombre}</h5>
            <p className="card-text">{item.descripcion}</p>
            <p className="card-text">
              <b>${item.precio}</b>
            </p>
          </div>
      </div>
      </Link>
  );
};

export default Item;
