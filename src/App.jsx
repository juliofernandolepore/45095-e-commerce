
import './App.css';
import NavBar from './pages/NavBar'  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer'
import Acerca from './pages/Acerca'
import Contacto from './pages/Contacto'
import Eventos from './pages/Eventos'
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
      <Router>      
      <NavBar/>      
      <Routes>
        <Route path='/list' element={<ItemlistContainer/>}/>
        <Route path='/list/:category' element={<ItemlistContainer/>}/>
        <Route path='/item/:id' element={<Item/>}/>
        <Route exact path="/" element={<ItemlistContainer />}/>
        <Route path="/category/:id" element={<ItemlistContainer />}/>
        <Route path ="/item/:id" element={<ItemDetailContainer />}/>
        <Route path='/Acerca' element={<Acerca/>}/>
        <Route path="/Contacto" element={<Contacto/>}/>
        <Route path="/Eventos" element={<Eventos/>}/>        
        <Route path="/Multimedia" element={<Multimedia/>}/>
        <Route path="/Catalogo" element={<Catalogo/>}/>
        <Route path="/Tienda" element={<Tienda/>}/>
        <Route path="*" element={<Inicio/>}/>
        <Route path="/carrito" element={<Carrito/>}/>
      </Routes>
      <Footer/>
      </Router>
    </>
  );
}

export default App;
