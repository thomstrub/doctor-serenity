import React from "react";
import "./randomAlarmBlurb.css"

export default function RandomAlarmBlurb({title}){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-5 offset-md-1">
                    <img src="_Images/randomalarm-screenshot-left.png" className="img-fluid" alt="Random Alarm"/>
                </div>

                <div className="col-md-5">
                    <h3>{title}</h3>
                    <p>
                    I incorporate my proprietary start-and-stop task management system into all of my coaching techniques. Download today to get started now.
                    </p>
                    <img src="_Images/btn-download.png" className="img-fluid" alt="Download Random Alarm"/>
                </div>

            </div>
        </div>
    )
}