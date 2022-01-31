import './App.css';
import Products from './Products';
import Productss from './Productss';
import ShoppingCart from './ShoppingCart';
import {CartProvider} from 'react-use-cart';
import NavBar from './NavBar';
import {Routes, Route} from "react-router-dom";
import Home from './Home';
import NotFound from "./NotFound"


function App() {

  return (
    <div className="ui container">
      <NavBar></NavBar>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Productss/>}></Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
