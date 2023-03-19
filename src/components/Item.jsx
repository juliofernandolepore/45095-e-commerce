import { Link } from "react-router-dom";
import styled from "styled-components";

const Item = ({ item }) => {
  
const NombreJuego = styled.h3 `
  font-size: 1.5rem;
  font-weight: 700;
  color: red;
`
const ImagenJuego = styled.img `
  border-radius: 0.3rem;
  border: solid black 2px;
`
  return (
    <Link to={"/item/" + item.id}> <div className="text-decoration-none text-dark">
      <div className="card-border-0">
          <ImagenJuego src={item.imagen} alt={item.nombre} />
          <div className="card-body text-center">
            <NombreJuego>{item.nombre}</NombreJuego>
          </div>
          </div>
      </div>
      </Link>
  );
};

export default Item;
