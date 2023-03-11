import { doc, getDoc, getFirestore } from "firestore/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import Spinner from "./Spinner";

const ItemDetailContainer = () => {
/* componente contenedor en el que actuan los hooks para 
remitir al hijo (ItemDetail) */
const [cargando, setCargando] = useState(true);
const [item, setItem] = useState({});
const {id} = useParams();

useEffect(()=>{

  const db = getFirestore();
  const document = doc(db, "items", id);
  /* esto es una promesa */
  getDoc(document).then(e=>{
    setItem({id:e.id, ...e.data()});
    setCargando(false);
  });    
},[id]);
  
  return (
    <>
    {cargando ? <Spinner/> : <ItemDetail item={item}/>}
    </>
    
  )
}

export default ItemDetailContainer