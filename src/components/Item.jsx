

const Item = ({i})=>{
    /* COMPONENTE MAQUETADOR UNICAMENTE */
    /* componente para el maquetador o render de los elementos donde se alojaran por
    props las iteraciones  map del ItemList */
    return(
        <>
        <div className="container" key={i.id}>
            <div className="row">
                <div className="col">
                    <p>titulo{i.title}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Item