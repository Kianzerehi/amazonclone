import React from "react";
import NavBar from "../Navbar/Navbar";



export default function Checkout(){
    return(<div className="checkout-container">
       
    
    <div className="checkout-subtotal">
        <img className='ad-space'src='https://momus.ca/wp-content/uploads/2019/01/UW-Horizontal-Ad-Momus.jpg' alt='adspace'/>
        <h1>Shopping Cart</h1>
        <hr></hr>
        <img src='https://m.media-amazon.com/images/I/71Ni33LIM8L._AC_UY218_.jpg' alt='image goes here'/>
        <p className="checkout-title">Computer Monitor</p>
        
        </div>
        <p>$20.99</p>
    <div className="subtotal">
            <p>Subtotal(1 item): $20.99</p>
    </div>
        
        
  <div className="checkout-proceed">
        
        <p>This order contains a gift</p>
        <button>Proceed to checkout</button>
    </div>
</div>

    
    )
}