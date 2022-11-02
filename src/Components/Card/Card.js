import React , {useState} from "react";
import './card.css';
import Rating from "./Rating";


export default function Card(props){
    function AddToCart (){
        props.setCartItems([...props.cartItems, props.title])
     
        console.log(props.cartItems)
    }
   
    return(<div className="product-card">
                <div className="product-info">
                <img className="product-logo" src={props.image} alt='placeholder' />
                
                <p className='product-title'>{props.title}</p>
                
                <p className="product-price">${props.price.toFixed(2)}</p>
                
                <p>
                    <Rating rate={props.rating.rate} />
                </p>
                </div>

                
               
                <input onClick={AddToCart} className="amazon-button" type="submit" value='Add To Cart' /> 
                
                
                
              
</div>)}
 
