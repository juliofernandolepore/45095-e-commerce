import { useEffect, useState } from "react"
import { useParams } from "react-router"
import ItemDetail from "./ItemDetail";
import { getDoc, getFirestore , doc } from "firestore/firestore";

const ItemDetailContainer = () => {
/* componente contenedor en el que actuan los hooks para 
remitir al hijo (ItemDetail) */
const [item, setItem] = useState({});
const {id} = useParams();

useEffect(()=>{

  const conexionDb = getFirestore();
  const documento = doc(conexionDb, "items", id);
  /* esto es una promesa */
  getDoc(documento, "items").then(e=>{
    setItem({id:e.id, ...e.data()});
  });
  const doc = doc(coleccionDeItems, id)
  
},[id]);
  
  return (
    <ItemDetail item={item}/>
  )
}

export default ItemDetailContainer