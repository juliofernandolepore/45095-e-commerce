import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import Spinner from "./Spinner";

const ItemDetailContainer = () => {
const [cargando, setCargando] = useState(true);
const [item, setItem] = useState({});
const {id} = useParams();

useEffect(()=>{

  const db = getFirestore();
  const document = doc(db, "items", id);  
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