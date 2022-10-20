import React from "react";

export default function Checkout(){
    return(<div className="checkout-container">
    
    <div className="checkout-subtotal">
        <img className='ad-space'src={require("../amazonad.png")} alt='adspace'/>
        <h1>Shopping Cart</h1>
        <hr></hr>
        <img src='' alt='image goes here'/>
        <p>Product name here</p>
        
        </div>
        <p>$20.99</p>
    <div className="subtotal">
            <p>Subtotal(1 item): 20.99</p>
    </div>
        
        
  <div className="checkout-proceed">
        <p>Subtotal (1 item):$20.99</p>
        <p>This order contains a gift</p>
        <button>Proceed to checkout</button>
    </div>
</div>
    
    )
}