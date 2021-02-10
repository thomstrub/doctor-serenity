import React from "react";
import "./hero.css"

export default function Hero({image, blurb}){
    return(
        <section className="container-fluid" >
        
          <div className="row">
          <div className="col" style={{minHeight: "300px", display: "flex", }}>
          <div className="container-fluid image" style={{background: `url(${image}) no-repeat center` }}>
            <h2 className="hero">{blurb}</h2>
          </div>
        </div>
        </div>

      </section>
    )
}