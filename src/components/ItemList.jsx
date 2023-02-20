import Item from './Item'


const ItemList = ({prod}) => {
  /* ItemList es un componente (hijo) que recibe un ARREGLO que le envia
   via props el componente ItemListContainer (padre) */

   /* no olvida aplicar la desestructuracion de la prop de itemlistContainer */

   /* prod es un array de objetos al cual renderizo con el metodo map el cual se lo envio al componente
   Item (hijo) el cual tiene por unica mision maquetar todos el contenido mapeado */

  return (
    
    prod.map(i => 
    <div className='col-md-2 m-5 bg-yellow-400' key={i.id}>
      <Item i={i}/>
      </div>)
    
    
  )
}

export default ItemList