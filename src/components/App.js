import { useState } from 'react';
import './App.css';
import Products from './Products';
import ShoppingCart from './ShoppingCart';
import {CartProvider} from 'react-use-cart';


function App() {
  const [cart, setCart] = useState();

  return (
    <div className="ui container">
      <h1>Hello World This is Homepage</h1>
      <CartProvider>
        <Products/>
        <ShoppingCart/>
      </CartProvider>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}

export default App;
