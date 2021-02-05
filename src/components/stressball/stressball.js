import React from 'react';
import "./stressball.css"

export default function Stressball(){
    return(
        <div className="container" style={{padding: "50px"}}>
            <div className="row">
                <div className="col-md-5 offset-md-2">
                    <h2 className="session-text">Book a session today and receive a free Dr. Serenity™ stress ball!</h2>
                    <p className="small caption session-text">Stress balls are a proven way to reduce stress!</p>
                    <a className="btn btn-primary session-button" href="#" role="button">Book a session now</a>
                </div>
                <div className="col-md-3">
                    <img src="_Images/stressball.png" alt="Stressball" className="img-fluid"/>
                </div>

            </div>
        </div>
    )
}