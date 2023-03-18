import Item from './Item'

const ItemList = ({prod}) => {
  return (
    
    prod.map(item => 
    <div className='col-md-2 m-5 bg-yellow-400' key={item.id}>
      <Item item={item}/>
      </div>)   
    
  )
}

export default ItemList