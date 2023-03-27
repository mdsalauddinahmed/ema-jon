import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    // console.log(cart)
    let totalPrice =0;
    let totalShipping =0;
    {
        cart.map(cart=>{
            totalPrice= totalPrice+cart.price
            totalShipping = totalShipping+cart.shipping;
        })
    }
    const tax = totalPrice*7/100;
    const GrandTotal = totalPrice+totalShipping+tax;
    return (
        <div className="cart">
            <h4>Order summary :</h4>
            <p>Selected items: {cart.length}</p>
            <p>Total Price : { totalPrice}</p>
            <p>Total shipping:{totalShipping} </p>
            <p>Tax :{tax.toFixed(2)} </p>
            <h6> Grand Total: ${GrandTotal} only </h6>
        </div>
    );
};

export default Cart;