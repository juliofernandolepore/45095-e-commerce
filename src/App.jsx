
import './App.css';
import NavBar from './components/NavBar'
//import ItemListContainer from './components/ItemListContainer'  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio'
import Acerca from './pages/Acerca'
import Contacto from './pages/Contacto'
import Eventos from './pages/Eventos'
import Multimedia from './pages/Multimedia'
import Proyectos from './pages/Proyectos'
import Tienda from './pages/Tienda'
import Footer from './components/Footer';
          
function App() {
/* ESTA ES UNA PAGINA QUE LE ESTOY REALIZANDO A MI ESPOSA A TRAVES DEL CURSO DE CODERHOUSE */

  return (
    
    <>   
      <Router>      
      <NavBar/>      
      <Routes>
        <Route exact path="/" element={<Inicio />}/>
        <Route path='/Acerca' element={<Acerca/>}/>
        <Route path="/Contacto" element={<Contacto/>}/>
        <Route path="/Eventos" element={<Eventos/>}/>        
        <Route path="/Multimedia" element={<Multimedia/>}/>
        <Route path="/Proyectos" element={<Proyectos/>}/>
        <Route path="/Tienda" element={<Tienda/>}/>
      </Routes>
      <Footer/>
      </Router>
    </>
  );
}

export default App;
