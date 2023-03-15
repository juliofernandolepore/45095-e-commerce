import { Link , useParams } from "react-router-dom";

const GraciasAviso = () => {
    const {orderId} = useParams();

  return (
    <div className="container">
        <div className="row my-3">
            <div className="col-md-12 text-end">
                {orderId ? <div class="alert alert-warning text-center" role="alert">
                <h3>Gracias por tu Compra!</h3>
                <p>Se generó una Orden de Compra con el siguiente codigo: <b>{orderId}</b></p>
                </div> : ""}
                <Link to={"/"} className="btn btn-warning">Volver a Inicio</Link>
            </div>
        </div>
    </div>
  )
}

export default GraciasAviso