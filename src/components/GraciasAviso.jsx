import { Link , useParams } from "react-router-dom";

const GraciasAviso = () => {
    const {orderId} = useParams();

  return ( 
          <div className="container my-5">
              <div className="row">
                  <div className="col-md-12 text-center">
                      {orderId ? <div class="alert alert-warning text-center" role="alert"><h3>Gracias por tu Compra!</h3><p>Orden de Compra generada con ID: <b>{orderId}</b></p></div> : ""}
                      <Link to={"/"} class="btn btn-warning">Voler al Menú Principal</Link>
                  </div>
              </div>
          </div>
      ) 
  }

export default GraciasAviso