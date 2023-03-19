import { Link , useParams } from "react-router-dom";
import styled from "styled-components";
const GraciasAviso = () => {
    const {orderId} = useParams();
    const TituloH3 = styled.h3 `
     font-size: 5rem;
     font-weight: bold;
     color: green;
     margin: 5rem;
     padding:5 rem;   
    `
  return ( 
          <div className="container my-5">
              <div className="row">
                  <div className="col-md-12 text-center">
                      {orderId ? <div class="alert alert-warning text-center" role="alert"><TituloH3>Gracias por tu Compra!</TituloH3><p>Orden de Compra generada con ID: <b>{orderId}</b></p></div> : ""}
                      <Link to={"/"} class="btn btn-warning">Voler al Menú Principal</Link>
                  </div>
              </div>
          </div>
      ) 
  }

export default GraciasAviso