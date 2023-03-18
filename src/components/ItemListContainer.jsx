import { db } from "../firebase/index";
import { useEffect, useState } from "react";
import ItemList from './ItemList';
import { useParams } from "react-router";
import { collection, getDocs, query, where} from "firebase/firestore";
import Spinner from "./Spinner";

const ItemlistContainer = ()=>{
    const [items, setItems] = useState([])
    const [cargando, setCargando] = useState(true);
    const {id} = useParams();
    

    useEffect(() => {
              
        const coleccionDeItems = collection(db, "items");
        const consulta = id ? query(coleccionDeItems, where("categoria", "==", id) ) : coleccionDeItems;
        getDocs(consulta).then((e)=>{
            setItems(e.docs.map(elemento =>({id:elemento.id, ...elemento.data()}))) 
            setCargando(false);
        })
      }, [id]);

    return (
        <>
        <div className="container d-flex flex-wrap">
            {cargando? <Spinner/> : <ItemList items={items}/>}        
        </div>         
        </>
    )
}
export default ItemlistContainer

