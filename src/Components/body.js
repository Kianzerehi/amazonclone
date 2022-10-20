import React from "react";
import '../amazon-background.jpg';
import Card from "./product-card";
import data from "../fakeshop";


export default function Body(){
    const productInfo = data.map(items => {
        return (
          <Card 
          key={items.id}{...items} />
        )
      })
    
    return(<div>
        <div className="amazon-background">
            <img className='amazon-photo' src={require('../amazon-background.jpg')} alt='amazon background'/>
        </div>
        
    <div >
        <section className="first-row">{productInfo}</section>
        
        
     </div>
        
       
       </div>
    )
}