import Item from './Item'

const ItemList = ({prod}) => {
  return (
    
    prod.map(i => 
    <div className='col-md-2 m-5 bg-yellow-400' key={i.id}>
      <Item i={i}/>
      </div>)   
    
  )
}

export default ItemList