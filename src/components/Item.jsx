const Item = ({ i }) => {
  /* COMPONENTE MAQUETADOR UNICAMENTE */
  /* componente para el maquetador o render de los elementos donde se alojaran por
    props las iteraciones  map del ItemList */


/* el atributo permalink traido en el arreglo devuelto en la api permite redireccion al producto en cuestion */    
  return (
    <>
      <div className="m-3 p-5 border border-5">
        <a href={i.permalink} target={"_blank"} className="text-start " rel={"noreferrer"}>
          <img src={i.thumbnail} className="card-img-top" alt={i.title} />
          <div className="card-body">
            <h5 className="card-title">{i.title}</h5>
            <p className="card-text">
              <b>${i.price}</b>
            </p>
          </div>
        </a>
      </div>
    </>
  );
};

export default Item;
