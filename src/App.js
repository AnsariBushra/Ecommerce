import './App.css';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Navbar from 'D:/Ecommerce/frontend/src/Components/Navbar.js';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import { Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>

    <Navbar title="ElectroMart" />
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/services' element={ <Services /> } />
      <Route path='/product' element={ <Product /> } />
      <Route path='/contact' element={<Contact />} />
      </Routes>
    
    </div>
  );
}

export default App;
