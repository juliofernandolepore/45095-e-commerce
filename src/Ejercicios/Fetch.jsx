import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Fetch = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((respuesta) => respuesta.json())
      .then((arreglo) => {setProductos(arreglo); });
  }, []);

  return (
    <>
    <h1 className="text-center">Consumiendo apis</h1>
    <div className="container">
      <div className="row">
        <div className="col">        
      <ul>
        {productos.map((i) => (
          <li key={i.id}>
            
            <div className="border border-dark m-5 bg-slate-500">
            <h4 className="bg-black text-white text-center">ID producto:{i.id}</h4>
            <p className="text-white text-center">nombre:</p>
            <h5 className="text-center p-3" >{i.title}</h5>
            <div>
              <h5 className="p-3"><p className="text-white text-center">especificaciones:</p> {i.description}</h5>
            </div>
            </div>            
          </li>
        ))}
      </ul>
        </div>

      </div>


    </div>
      
    </>
  );
};

export default Fetch;
