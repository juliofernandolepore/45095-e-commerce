import { Link , useParams } from "react-router-dom";
import styled from "styled-components";
const GraciasAviso = () => {
    const {orderId} = useParams();
    const TituloH3 = styled.h3 `
     font-size: 5rem;
     font-weight: bold;
     color: green;
     margin: 4rem;
     padding: 4rem;   
    `;

    const VolverInicio = styled.button`
      color: white;
      background-color: black;
      padding: 0.3rem;      
       border-radius: 0.2rem; 
    `
  return ( 
          <div className="container my-5">
              <div className="row">
                  <div className="col-md-12 text-center">
                      {orderId ? <div class="alert alert-warning text-center" role="alert"><TituloH3>Gracias por tu Compra!</TituloH3><p>Orden de Compra generada con ID: <b>{orderId}</b></p></div> : ""}
                      <Link to={"/"}><VolverInicio>Voler al Menú Principal</VolverInicio></Link>
                  </div>
              </div>
          </div>
      ) 
  }

export default GraciasAviso