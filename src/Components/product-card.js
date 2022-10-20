import React from "react";
import '../styles/card.css';



export default function Card(props){
    return(<div>
            <div className="product-card">
                <p>{props.title}</p>
                <p>${props.price}</p>
                <p>{props.rating.rate}</p>
                <img className="product-logo" src={props.image} alt='placeholder' />
                <button className="add-cart">Add to Cart</button> 
</div></div>)}