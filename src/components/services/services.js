import React from 'react';
import "./services.css"

export default function Services(){
    return(
        <div className="container" style={{padding: "50px"}}>
            <div className="row">
                <div className="col-md-5 offset-md-1">
                    <img src="_Images/ted.png" alt="TED talk" className="img-fluid"/>
                    
                </div>
                <div className="col-md-6">
                <h2 className="services-header">Motivational Speaking</h2>
                    <p className="services-text">I’ve given lots of life advice to most people I meet. My dream is to speak at a TED Conference LLC. Although I don’t have formal experience in motivational speaking, you can count on me to engage with any audience and give great Life Coaching advice.</p>
                    
                </div>

            </div>
        </div>
    )
}