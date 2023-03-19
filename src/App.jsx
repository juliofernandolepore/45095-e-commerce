import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartContextProvider from "./context/CartContext";
import NavBar from './pages/NavBar'; 
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Footer from './pages/Footer';
import ItemlistContainer from './components/ItemListContainer';
import Checkout from './components/Checkout';
import GraciasAviso from './components/GraciasAviso';
import NotFound from "./components/NotFound";         
import Playstation from './consolas/Playstation';
import Edicion from "./consolas/Edicion";
function App() {
  return (     
    <CartContextProvider>  
      <Router>      
      <NavBar/>      
      <Routes>
        <Route path="/" element={<ItemlistContainer/>}/>        
        <Route path="/Catalogo" element={<ItemlistContainer/>}/>        
        <Route path="/categoria/:id" element={<ItemlistContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path ="/cart" element={<Cart />}/>
        <Route path ="/checkout" element={<Checkout />}/>                               
        <Route path ="/gracias/:orderId" element={<GraciasAviso />}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/plataforma/:id" element={<Playstation/>}/>
        <Route path="/version/:id" element={<Edicion/>}/>
      </Routes>
      <Footer/>
      </Router>
    </CartContextProvider>
  );
}

export default App;
