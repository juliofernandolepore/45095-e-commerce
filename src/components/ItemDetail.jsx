const ItemDetail =({item})=> {
  /* aqui en ItemDetail (DETALLES DEL ITEM), lo proveniente del array */    
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col"><img src={item.thumbnail} alt={item.title} width={120} /></div>
            
          </div>
        </div>
        <div className="col">
          <h1>{item.title}</h1>
          <p>{item.price}</p>
        </div>
      </div>
      </div>    
    </>
  )
}

export default ItemDetail
