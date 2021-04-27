import React from "react";
import "./randomApp.css"

export default function RandomApp(){
    return(
        <div className="container random-padding">
            <div className="row">
                <div className="col-md-3 offset-1">
                    <img src="images/random_alarm_app.jpg" className="img-fluid" alt="Random Alarm"/>
                </div>

                <div className="col-md-6 offset-1">
                    <h3 className="title">Harness the power of random</h3>
                    <p className="app-text">
                    I have innovated three proprietary methods that coordinate with each measured success. Together, they are called RandomAlarm™.
                    </p>
                    <img src="images/RandomAppStore_White.png" className="img-fluid" alt="Download Random Alarm"/>
                </div>

            </div>
        </div>
    )
}