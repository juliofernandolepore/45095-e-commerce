import { useEffect, useState } from "react"
import ItemList from './ItemList'
import ItemCount from './ItemCount'

const ItemlistContainer = ()=>{
/* este es el componente contenedor que realiza las instrucciones mas pesadas del fetch, que importa un 
componente hijo al cual le hereda via props. */
    const [prod, setProd] = useState([])
    
    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=ssd&limit=10')
        .then((r)=> r.json())
        .then((r) => {
            setProd(r.results);
        })
      }, []);

    return (
        <>
        <ItemCount/>  
        <ItemList prod={prod}/>
        
        </>
    )
}
export default ItemlistContainer

