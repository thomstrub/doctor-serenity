import React from 'react';
import './homeHero.css'
import ButtonElem from '../buttonElem/buttonElem';

export default function HomeHero(){

    return(
        
        <div className="container-fluid home-hero-image" style={{backgroundImage: "url('_Images/hero.png')"}} >
            <div className="row">
              
            <div className="col-md-6 offset-5" style={{minHeight: "300px", display: "flex", }}>
            <div className="row hero-row">
            <div className="col container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="home-hero-blurb">
                            <h2 className="hero" style={{color: "black"}}>Do you need help getting your life <strong>together</strong>? Look no further.</h2>
                            <p className="hero-sub">Let Dr. Serenity™ lead you through a life-changing journey with guaranteed* results.</p>
                            
                            <p className="footnote">*not legally binding</p>
                        </div>
                    </div>
                </div>
              
                <div className="row">
                    <div className="col">
                        <ButtonElem text="Book a session now"/>
                    </div>
                </div>
            </div>
            
          </div>
            
          </div>
          </div>

        </div>
    )
}