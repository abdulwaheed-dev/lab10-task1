import React, { useState } from 'react';
import MockData from '../data/MOCK_DATA.json'
import Product from "./Product";

function Products(){

    const [MockItem,setMockItem] = useState(MockData);

    return(<div className='ui three column grid'>
        <h1>Products</h1>
        <div className='row'>
        {MockItem.map((item,index)=>(
            <Product 
                id={item.id} 
                name={item.name} 
                price={item.price} 
                qty={item.qty} 
                item={item} 
                key={index} 
            />
        ))}
        </div>

    </div>)
}
export default Products;
