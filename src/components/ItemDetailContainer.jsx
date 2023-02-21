import { useEffect, useState } from "react"
import { useParams } from "react-router"
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
/* componente contenedor en el que actuan los hooks para 
remitir al hijo (ItemDetail) */
const [item, setItem] = useState({});
const {id} = useParams();

useEffect(()=>{
  fetch("https://api.mercadolibre.com/items/" + id)
  .then((r)=>r.json())
  .then((datosObjeto)=>{
    setItem(datosObjeto);
  })
},[id])
  
  return (
    <ItemDetail item={item}/>
  )
}

export default ItemDetailContainer