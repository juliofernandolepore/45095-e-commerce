
import './App.css';
import NavBar from './pages/NavBar'  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer'

import Multimedia from './pages/Multimedia'
import Catalogo from './pages/Catalogo'
import Tienda from './pages/Tienda'
import Footer from './pages/Footer'
import ItemlistContainer from './components/ItemListContainer'
import Item from "./components/Item"
import Inicio from "./pages/Inicio"
import Carrito from "./components/Carrito"
          
function App() {
/* ESTA ES UNA PAGINA QUE LE ESTOY REALIZANDO A MI ESPOSA A TRAVES DEL CURSO DE CODERHOUSE */
/* usar la funcion useParams para capturar variables generadas o colocadas mediante URL */
  return (    
    <> 
    <cartContextProvider>  
      <Router>      
      <NavBar/>      
      <Routes>
        <Route path='/list' element={<ItemlistContainer/>}/>
        <Route path='/list/:category' element={<ItemlistContainer/>}/>
        <Route path='/item/:id' element={<Item/>}/>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/:id" element={<ItemlistContainer />}/>
        <Route path ="/producto/:id" element={<ItemDetailContainer />}/>
        <Route path ="/cart" element={<Cart />}/>                
        <Route path="/Multimedia" element={<Multimedia/>}/>
        <Route path="/Catalogo" element={<Catalogo/>}/>
        <Route path="/Tienda" element={<Tienda/>}/>
        <Route path="/inicio" element={<Inicio/>}/>
        <Route path="/carrito" element={<Carrito/>}/>
      </Routes>
      <Footer/>
      </Router>
    </cartContextProvider>
    </>
  );
}

export default App;
