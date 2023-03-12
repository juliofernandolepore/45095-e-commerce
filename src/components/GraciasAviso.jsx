import { useParams } from "react-router-dom";

const GraciasAviso = () => {
    const {orderId} = useParams();

  return (
    <div className="container">
        <div className="row my-3">
            <div className="col-md-12">
                {orderId ? <div class="alert alert-warning text-center" role="alert">
                <h3>Gracias por tu Compra!</h3>
                <p>Se generó una Orden de Compra con el ID: <b>{orderId}</b></p>
                </div> : ""}
            </div>
        </div>
    </div>
  )
}

export default GraciasAviso