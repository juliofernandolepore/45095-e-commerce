
import './App.css';
import NavBar from './components/NavBar'  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio'
import Acerca from './pages/Acerca'
import Contacto from './pages/Contacto'
import Eventos from './pages/Eventos'
import Multimedia from './pages/Multimedia'
import Catalogo from './components/Catalogo'
import Tienda from './pages/Tienda'
import Footer from './components/Footer';
import ItemlistContainer from './components/ItemListContainer';
import Item from "./components/Item"
          
function App() {
/* ESTA ES UNA PAGINA QUE LE ESTOY REALIZANDO A MI ESPOSA A TRAVES DEL 
CURSO DE CODERHOUSE */

/* agregando rutas PRE-ENTREGA 2 */

/* usar la funcion useParams para capturar variables generadas o 
colocadas mediante URL */
  return (    
    <>   
      <Router>      
      <NavBar/>      
      <Routes>
        <Route path='/list' element={<ItemlistContainer/>}/>
        <Route path='/list/:category' element={<ItemlistContainer/>}/>
        <Route path='/item/:id' element={<Item/>}/>
        <Route exact path="/" element={<Inicio />}/>
        <Route path='/Acerca' element={<Acerca/>}/>
        <Route path="/Contacto" element={<Contacto/>}/>
        <Route path="/Eventos" element={<Eventos/>}/>        
        <Route path="/Multimedia" element={<Multimedia/>}/>
        <Route path="/Catalogo" element={<Catalogo/>}/>
        <Route path="/Tienda" element={<Tienda/>}/>
      </Routes>
      <Footer/>
      </Router>
    </>
  );
}

export default App;
