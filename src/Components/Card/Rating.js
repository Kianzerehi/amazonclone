import React from "react";

 function Rating({rate}){
    let goldStars = ''
       if(rate >= 4.9){
           goldStars = '⭐⭐⭐⭐⭐'
                                       }
        else if (rate >= 3.9){
           goldStars = '⭐⭐⭐⭐'
                                       }
         else if (rate >= 2.9){
               goldStars = '⭐⭐⭐'}
                                         
         else if(rate >= 1.9){
               goldStars = '⭐⭐'
                                        }
         else {goldStars = ''}
         return (
        <div>
            {goldStars}
        </div>)}
export default Rating