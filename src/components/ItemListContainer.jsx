import { useEffect, useState } from "react"
import ItemList from './ItemList'
import { useParams } from "react-router"
//import ItemCount from './ItemCount'

const ItemlistContainer = ()=>{
/* este es el componente contenedor que realiza las instrucciones mas pesadas del fetch, que importa un 
componente hijo al cual le hereda via props. */
    const [prod, setProd] = useState([])
    const {id} = useParams()
    
    useEffect(() => {
        let variableBusqueda = id ? id : "hdd"
        fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + variableBusqueda + "&limit=18")
        .then((r)=> r.json())
        .then((r) => {
            setProd(r.results);
        })
      }, [id]);

    return (
        <>          
        <ItemList prod={prod}/>                
        </>
    )
}
export default ItemlistContainer

