import { Link } from "react-router-dom";
const Item = ({ i }) => {
  
  return (
    <Link to={"/producto/" + i.id}>
      <div className="m-3 p-5 border border-5 text-start">
          <img src={i.thumbnail} className="card-img-top" alt={i.nombre} />
          <div className="card-body">
            <h5 className="card-title">{i.nombre}</h5>
            <p className="card-text">
              <b>${i.precio}</b>
            </p>
          </div>
      </div>
      </Link>
  );
};

export default Item;
