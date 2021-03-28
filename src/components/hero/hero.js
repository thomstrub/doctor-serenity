import React from "react";
import "./hero.css"

export default function Hero({image, blurb}){
    return(
        <div className="hero-container" style={{backgroundImage: `url(${image})`, width: "100%" }} >
        
        <div className="row text-container">
          <div className="col-md-12">
            
              <h2 className="hero">{blurb}</h2>
            
            
          </div>
        </div>
          
              
            

      </div>
    )
}