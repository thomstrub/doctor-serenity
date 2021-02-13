import React from "react";
import "./randomApp.css"

export default function RandomApp(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-3 offset-1">
                    <img src="_Images/randomalarm-app.jpg" className="img-fluid" alt="Random Alarm"/>
                </div>

                <div className="col-md-6 offset-1">
                    <h3>Harness the power of random</h3>
                    <p>
                    I have innovated three proprietary methods that coordinate with each measured success. Together, they are called RandomAlarm™.
                    </p>
                    <img src="_Images/btn-download.png" className="img-fluid" alt="Download Random Alarm"/>
                </div>

            </div>
        </div>
    )
}