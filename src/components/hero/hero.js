import React from "react";
import "./hero.css"

export default function Hero({image, blurb}){
    return(
        <section className="container-fluid image" style={{backgroundImage: {image}, backgroundRepeat: "no-repeat"}}>
        <div>
          <div className="row">
          <div className="col-md-12" style={{minHeight: "300px", display: "flex", margin: "10vw 0 0 20vw"}}>
            <h2 className="hero">{blurb}</h2>
          </div>
        </div>
        </div>

      </section>
    )
}