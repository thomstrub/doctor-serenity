import React from 'react';
import "./services.css"

export default function Services(){
    return(
        <div className="container" style={{padding: "50px"}}>
            <div className="row">
                <div className="col-md-5 offset-md-2">
                    <img src="_Images/ted.png" alt="TED talk" className="img-fluid"/>
                    
                </div>
                <div className="col-md-3">
                <h2 className="session-text">Motivational Speaking</h2>
                    <p className="small caption session-text">I’ve given lots of life advice to most people I meet. My dream is to speak at a TED Conference LLC. Although I don’t have formal experience in motivational speaking, you can count on me to engage with any audience and give great Life Coaching advice.</p>
                    
                </div>

            </div>
        </div>
    )
}