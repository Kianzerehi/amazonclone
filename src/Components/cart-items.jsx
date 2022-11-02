import React, {useState} from "react";

export default function CartItems () {
    const [cartItems, setCartItems] = useState([]);

    function AddToCart (item){
        setCartItems([...cartItems, item])
    }
    
    
}
