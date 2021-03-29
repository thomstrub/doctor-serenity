import React from 'react';
import './homeHero.css'
import Button from '../button/button';

export default function HomeHero(){

    return(
        
        <div className="container-fluid home-hero-image" style={{backgroundImage: "url('_Images/hero.png')"}} >
            <div className="row">
              <div className="hero-row">

            <div className="col-md-6 offset-1" style={{minHeight: "300px", display: "flex", }}>
          
            <div className="container-fluid">
              <h2 className="hero" style={{color: "black"}}>Do you need help getting your life <strong>together</strong>? Look no further.</h2>
              <p className="hero-sub">Let Dr. Serenity™ lead you through a life-changing journey with guaranteed* results.</p>
              <Button text="Book a session now"/>
              <p className="footnote">*not legally binding</p>
            </div>
          </div>
          </div>
          </div>

        </div>
    )
}