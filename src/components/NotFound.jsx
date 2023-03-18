import error404 from "../images/error404.svg"

const NotFound = () => {
  return (
    <div className="container">
            <div className="row my-5">
                <div className="col text-center">
                <p className="justify-content-center"><img src={error404} alt="Sony Argentina" width={"80"} /></p>
                <h1>Error 404!</h1>                    
                <h3>Pagina no encontrada!</h3>
                </div>
            </div>
        </div>
  )
}

export default NotFound