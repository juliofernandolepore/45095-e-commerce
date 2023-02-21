import ItemCount from "../components/ItemCount"
//import ItemDetailContainer from "../components/ItemDetailContainer"

const Tienda= ()=>{
    return (
        <>
        <div className="h-20 bg-red-400 text-blue text-center m-5">
        <h1 className="h1 border-b-2 m-5 p-5">Tienda de productos</h1>
        <h2 className="h2 m-5 p-5">Testeo de api </h2>        
        </div>
        <div className="m-5 p-5">
        <ItemCount/>    
        </div>   
        
          
    </>
    
    )
}

export default Tienda