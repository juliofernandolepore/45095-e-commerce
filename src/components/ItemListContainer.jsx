import { useEffect, useState } from "react"
import ItemList from './ItemList'
import { useParams } from "react-router"
import { collection, getDocs, getFirestore, query, where} from "firebase/firestore"
import Spinner from "./Spinner"

const ItemlistContainer = ()=>{
/* este es el componente contenedor que realiza las instrucciones mas pesadas del fetch, que importa un 
componente hijo al cual le hereda via props. */
    const [prod, setProd] = useState([])
    /* colocando spinner a traves de hook useState */
    const [cargando, setCargando] = useState(true);

    const {id} = useParams()
    
    useEffect(() => {
        /* creacion de coneccion */
        const conexionDb = getFirestore();
        /* conexion a la coleccion seleccionada */
        const coleccionDeItems = collection(conexionDb, "items");
        /* ahora tengo que añadir filtrado de productos (query) */
        const consulta = id ? query(coleccionDeItems, where(categoria, "==", id) ) : coleccionDeItems
        /* metodo para traer todos los elementos de una coleccion */
        getDocs(consulta).then((e)=>{
            setProd(e.docs.map(elemento =>({id:elemento.id, ...elemento.data()})))
            setCargando(false);
        })
      }, [id]);

    return (
        <>
        <div className="container">
            {cargando? <Spinner/> : <ItemList prod={prod}/>}        
        </div>         
        </>
    )
}
export default ItemlistContainer

