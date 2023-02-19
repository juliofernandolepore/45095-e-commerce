
import ItemListContainer from "../components/ItemListContainer"

const Catalogo = ()=>{
    /* segun la rubrica de la pre-entrega 2 aqui deben cargarse los productos */
    /* el componente itemListContainer hace uso de useState y useEffect donde esta todo lo solicitado 
    a la api, en sintesis este componente renderiza lo mas pesado */

    return (
        <>
        <div className="bg-black text-white p-5">
        <h1 className="text-center fw-bold">CATALOGO DE PRODUCTOS</h1>
        </div>
                
        <ItemListContainer/>
        </>
    
    )
}

export default Catalogo