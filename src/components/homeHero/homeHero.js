import React from 'react';
import './homeHero.css'
import Button from '../button/button';

export default function HomeHero(){

    return(
        
        <div className="container-fluid" style={{background: "url('_Images/water.jpg') no-repeat center", height: "100%", padding: "30px 0 -5 0"}} >
            <div className="row">
              <div className="hero-row">

              
              <div className="col-md-3 offset-md-1">
                    <img style={{maxHeight: "32vw", minHeight: "300px", marginTop:"20px", borderRadius: "6px"}} src="_Images/the_doctor.png" className=" image the_doctor img-fluid" alt="Doctor Serenity"/>
                </div>
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