import React from "react";
import {useCart} from "react-use-cart";

function ShoppingCart(props){
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();

    if(isEmpty) return <h1>Your Cart is Empty</h1>

    return(
        <div>
            <h1>Shopping Cart</h1>
            <p><b>Total Items: {totalItems}</b></p>
            <table className="ui single line table">
                <thead>
                    <tr>
                        <th>
                            Product Name
                        </th>
                        <th>
                            Price
                        </th>
                        <th>
                            Quantity
                        </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((itm,index)=>(
                        <tr key={index}>
                            <td>{itm.name}</td>
                            <td>${itm.price}</td>
                            <td>
                                <button onClick={()=>{updateItemQuantity(itm.id,itm.quantity - 1)}} className="ui yellow button" style={{marginRight:'5px'}} >-</button>
                                {itm.quantity}
                                <button onClick={()=>{updateItemQuantity(itm.id,itm.quantity + 1)}} className="ui green button" style={{marginLeft:'5px'}}>+</button>
                            </td>
                            <td>
                                <button onClick={()=>{removeItem(itm.id)}} className="ui red button">Remove Item</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <h1>Grand Total: $ {cartTotal}/-</h1>
                <button onClick={()=>{emptyCart()}} className="ui red button">Clear Cart</button>
                <button className="ui blue button">Proceed to Checkout</button>
            </div>
        </div>
    )
}
export default ShoppingCart;
