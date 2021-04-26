import React from "react";
import "./alarmBlurb.css";

export default function AlarmBlurb({title}){
    return(
        <div className="container alarm-container">
            <div className="row">
                <div className="col-md-5 offset-md-1">
                    <img src="images/RandomAlarmSleep.png" className="img-fluid" alt="Random Alarm"/>
                </div>

                <div className="col-md-5">
                    <h3 className="random-alarm-blurb-header">{title}</h3>
                    <p className="random-alarm-blurb-p">
                    I incorporate my proprietary start-and-stop task management system into all of my coaching techniques. Download today to get started now.
                    </p>
                    <img src="images/RandomAppStore.png" className="img-fluid" alt="Download Random Alarm"/>
                </div>

            </div>
        </div>
    )
}