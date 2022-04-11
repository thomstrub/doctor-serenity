import React from 'react';
import './smallHomeHero.css'
import ButtonElem from '../buttonElem/buttonElem';

export default function SmallHomeHero(){

    return(
        
        <div className="container-fluid home-hero-image"  >
            <div className="row">
              
            
            <div className="row hero-row">
            <div className="col container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="home-hero-blurb">
                            <h2 className="hero" style={{color: "black"}}>Do you need help getting your life <strong>together</strong>? Look no further.</h2>
                            <p className="hero-sub">Let Dr. Serenity™ lead you through a life-changing journey with guaranteed* results.</p>
                            <div className="footnote">
                                <p >*not legally binding</p>
                            </div>
                            
                            <div style={{paddingLeft: "25px"}}>
                            <ButtonElem text="Book a session now" target="contact"/>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            
          </div>
            
          
          </div>

        </div>
    )
}