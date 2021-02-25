import React from "react";
import "./hero.css"

export default function Hero({image, blurb}){
    return(
        <section className="container-fluid" style={{background: `url(${image}) no-repeat center` }} >
        
          <div className="row">
          <div className="col" style={{minHeight: "300px", display: "flex", }}>
          <div className="container-fluid image">
            <div className="col-lg-6">
              <h2 className="hero">{blurb}</h2>
            </div>
            
          </div>
        </div>
        </div>

      </section>
    )
}