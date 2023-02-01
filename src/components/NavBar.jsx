import CardWidget from "./CardWidget"
import ItemListContainer from "./ItemListContainer"

const NavBar = ()=>{
    const navegacion ="menu de navegacion"

    return (
        <>
        <h3>{navegacion}</h3>
        <ItemListContainer/>
        <CardWidget/>
        </>
        
    )
}

export default NavBar