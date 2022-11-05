import React from "react";




export default function Checkout(){
    return(<div className="checkout-container">
       
    
    <div className="checkout-subtotal">
        <img className='ad-space'src='https://momus.ca/wp-content/uploads/2019/01/UW-Horizontal-Ad-Momus.jpg' alt='adspace'/>
        <h1>Shopping Cart</h1>
        <hr></hr>
    </div>

    <div classname='cart-box'>
        <img className ='checkout-body'src='https://m.media-amazon.com/images/I/71Ni33LIM8L._AC_UY218_.jpg' alt='product image'/>
        <span className="checkout-title checkout-body">Computer Monitor</span>
        <span className="checkout-body">$20.99</span>
        <span className="checkout-body">"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"</span>
    </div>
    
    
    <div className="checkout-proceed">
            <p>Subtotal(1 item): $20.99</p>
            <p>This order contains a gift</p>
            <button className='checkout-button'>Proceed to checkout</button>
    </div>

</div>

    
    )
}