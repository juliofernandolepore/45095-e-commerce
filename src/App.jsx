import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './pages/NavBar'; 
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Tienda from './pages/Tienda';
import Footer from './pages/Footer';
import ItemlistContainer from './components/ItemListContainer';
import Inicio from "./pages/Inicio";
import Checkout from './components/Checkout';
import GraciasAviso from './components/GraciasAviso';
import NotFound from "./components/NotFound";         
function App() {
  return (     
    <cartContextProvider>  
      <Router>      
      <NavBar/>      
      <Routes>
        <Route path="/" element={<ItemlistContainer/>}/>
        <Route path="/inicio" element={<Inicio/>}/>        
        <Route path='/category/:id' element={<ItemlistContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path ="/cart" element={<Cart />}/>
        <Route path ="/checkout" element={<Checkout />}/>                        
        <Route path="/Tienda" element={<Tienda/>}/>       
        <Route path ="/gracias/:orderId" element={<GraciasAviso />}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
      </Router>
    </cartContextProvider>
  );
}

export default App;
