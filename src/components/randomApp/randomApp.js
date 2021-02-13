import React from "react";
import "./randomApp.css"

export default function RandomAlarmBlurb(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-3 offset-md-3">
                    <img src="_Images/randomalarm-app.jpg" className="img-fluid" alt="Random Alarm"/>
                </div>

                <div className="col-md-5">
                    <h3>Harness the power of random</h3>
                    <p>
                    I incorporate my proprietary start-and-stop task management system into all of my coaching techniques. Download today to get started now.
                    </p>
                    <img src="_Images/btn-download.png" className="img-fluid" alt="Download Random Alarm"/>
                </div>

            </div>
        </div>
    )
}