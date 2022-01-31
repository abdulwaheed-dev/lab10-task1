import React from 'react';
import {useCart} from "react-use-cart";

function Product(props){

    const {addItem} = useCart();

    return( 
            <div className="column">    
            <div className="ui card" style={{marginTop:'10px',height:'125px'}}>
                <div className="content">
                    <div> <h4>{props.name} </h4> </div>
                    <div style={{marginTop:'1px',marginBottom:'2px',color:'hotpink'}}> <b> ${props.price} </b> </div>
                    <button onClick={()=>addItem(props.item)} className="ui mini blue button">Add To Cart</button>
                </div>
            </div>
            </div>
        )
}
export default Product;