import DetalleDeProducto from "../components/DetalleDeProducto"
import ItemListContainer from "../components/ItemListContainer"

const Catalogo = ()=>{
    /* segun la rubrica de la pre-entrega 2 aqui deben cargarse 
    los detalles de los productos */

    /* CATALOGO ES EL COMPONENTE DONDE SE CARGAN LAS ACTIVIDADES DE LA PRE-ENTREGA, aunque 
    por motivos organizacionales deberia ubicarse en la carpeta pages */
    return (
        <>
        <h1 className="h-20 bg-violet-400 text-dart">CATALOGO</h1>
        <DetalleDeProducto/>
        <ItemListContainer/>
        </>
    
    )
}

export default Catalogo