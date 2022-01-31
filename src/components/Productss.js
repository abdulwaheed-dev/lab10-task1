import React from 'react';
import Products from './Products';
import ShoppingCart from './ShoppingCart';
import {CartProvider} from 'react-use-cart';

function Productss() {
  return <div>
      <CartProvider>
          <div className='ui grid'>
              <div className="left floated seven wide column">
                <Products/>
              </div>
              <div className="right floated eight wide column">
                <ShoppingCart/>
              </div>           
          </div>
      </CartProvider>
  </div>;
}

export default Productss;
