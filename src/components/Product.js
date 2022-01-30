import React from 'react';
import {useCart} from "react-use-cart";

function Product(props){

    const {addItem} = useCart();

    return( 
            <div className="column">    
            <div className="ui card" style={{height:'140px',marginTop:'10px', marginLeft:'10px'}}>
                <div className="content">
                    <div className="header">{props.id} - {props.name} </div>
                    <div className="meta">Quantity: {props.qty}</div>
                    <div className="header">Price: ${props.price} </div>
                    <button onClick={()=>addItem(props.item)} className="ui button">Add to Cart</button>
                </div>
            </div>
            </div>
        )
}
export default Product;
