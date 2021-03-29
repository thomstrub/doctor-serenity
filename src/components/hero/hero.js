import React from "react";
import "./hero.css"

export default function Hero({image, blurb}){
    return(
        <div className="hero-container" style={{backgroundImage: `url(${image})`, width: "100%" }} >
        
    
            <div className="text-container">
              <h2 className="hero">{blurb}</h2>
            </div>
              
            
            
     
          
              
            

      </div>
    )
}