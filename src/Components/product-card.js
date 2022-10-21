import React from "react";
import '../styles/card.css';




export default function Card(props){
  
    return(<div>
            <div className="product-card">
                <div className="product-info">
                <img className="product-logo" src={props.image} alt='placeholder' />
                
                <p>{props.title}</p>
                <p>${props.price.toFixed(2)}</p>
                <p>Rating: {props.rating.rate} stars</p>
                </div>
                </div>
                <div>
                
                <button className="add-cart">Add to Cart</button> 
                </div>
</div>)}
