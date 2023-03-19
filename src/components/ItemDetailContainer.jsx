import {db} from "../firebase/index";
import { doc, getDoc} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Spinner from "./Spinner";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [cargando, setCargando] = useState(true);
  const {id} = useParams();

useEffect(()=>{  
  const documento = doc(db, "items", id);  
  getDoc(documento).then(e=>{
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