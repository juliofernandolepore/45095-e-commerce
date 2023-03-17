import { useEffect, useState } from "react"
import ItemList from './ItemList'
import { useParams } from "react-router"
import { collection, getDocs, getFirestore, query, where} from "firebase/firestore"
import Spinner from "./Spinner"

const ItemlistContainer = ()=>{
    const [prod, setProd] = useState([])
    const [cargando, setCargando] = useState(true);
    const {id} = useParams()
       
    useEffect(() => {
        const conexionDb = getFirestore();
        const coleccionDeItems = collection(conexionDb, "items");
        const consulta = id ? query(coleccionDeItems, where("categoria", "==", id) ) : coleccionDeItems
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

