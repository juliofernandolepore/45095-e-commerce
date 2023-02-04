const ItemlistContainer = ({saludo, items, msj })=>{
    
    return(
        <>
        <div className="text-center m-2">
        <h1 className="text-6xl text-green-700 m-2">{saludo}</h1>
        <p className="text-6xl text-blue-700 m-2">listado de items</p>
        </div>
        
        <ul className="m-1 p-2 bg-gray-400">
            <li className="m-2 text-center">{items} 1 </li>
            <li className="m-2 text-center">{items} 2 </li>
            <li className="m-2 text-center">{items} 3 </li>
            <li className="m-2 text-center">{items} 4 </li>
            <li className="m-2 text-center">{items} 5 </li>
            <li className="m-2 text-center">{items} 6 </li>
            
            
        </ul>
        
        </>
    )
}
export default ItemlistContainer

