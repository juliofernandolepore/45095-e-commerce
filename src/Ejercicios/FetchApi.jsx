import { useEffect, useState } from "react";

const FetchApi = () => {
  /* estoy colocando solo por ahora iniciales a los parametros y argumentos para er el codigo mas sintetico
para aprender a escribir correctamente las promesas */
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=ssd&limit=5')
      .then((r1) => r1.json())
      .then((arregloApi) => {
        setItem(arregloApi);
      });
  }, []);

  return (        
  <ul> {item.map((i) => (<li className="h1" key={i.id}> nombre: {i.permalink} </li>))} </ul>        
    
  );
};

export default FetchApi;
