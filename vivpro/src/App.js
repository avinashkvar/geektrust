import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';

function App() {
	return  <Routes>
         <Route path='/' element={<Navbar/>}>
            <Route path='' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
         </Route>
  </Routes>
}

export default App;
