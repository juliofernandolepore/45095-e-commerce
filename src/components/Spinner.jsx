
const Spinner = () => {
  return (   
    
    <div className="container my-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1>Cargando...</h1>
                    <div className="spinner-border text-secondary" role="status">
                        <span className="visually-hidden">aguarde por favor...</span>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Spinner