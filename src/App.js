
import './App.css';
import Reservation from './component/main/reservation';
import Home from './component/home/home';
import Orderonline from './component/OrderOnline/orderonline';
import About from './component/about/about'
import Menu from './component/menu/menu'
import Login from './component/login/login';

import img1 from "././Assets/Mario and Adrian A.jpg"
import img2 from '././Assets/restauranfood.jpg'
import img3 from '././Assets/restaurant chef B.jpg'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {


  return (
 <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/reservations" element={<Reservation/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/orderonline" element={<Orderonline/>}/>
    <Route path="/menu" element={<Menu/>}/>
    <Route path='/login' element={<Login/>}/>
    
     
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
