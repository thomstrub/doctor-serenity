import React from 'react';
import "./services.css"

export default function Services({title, text}){
    return(
        <div className="container" style={{padding: "50px"}}>
            <div className="row">
                <div className="col-md-5 offset-md-1">
                    <img src="_Images/ted.png" alt="TED talk" className="img-fluid"/>
                    
                </div>
                <div className="col-md-6">
                <h2 className="services-header">{title}</h2>
                    <p className="services-text">{text}</p>
                    
                </div>

            </div>
        </div>
    )
}