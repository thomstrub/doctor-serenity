import React from 'react';
import Icon from '../icon/icon'
import './alarmDetails.css'

export default function AlarmDetails({page}){
    return(
        <section id="details">
        <div className="container">
          <div className="row">
            <div className="container">
              <h2 className="details-header">RandomAlarm™</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 offset-3">
                <p className="app-text">
                        I have innovated three proprietary methods that coordinate with each measured success. Together, they are called RandomAlarm™.
                </p>
            </div>
          </div>
          <div className="row">
            <Icon 
              title="RandomNap™"
              content="RandomAlarm™ gently notifies you at random times throughout the day when you should take a nap or wake from restfulness. Frequent naps lead to frequent productivity and well-being." 
              page={page} 
              icon="images/icons/RandomNap.svg"
              />
            <Icon 
            title="RandomTask™"
            content="Starting and stopping work at random times throughout the day may seem counterintuitive, but Dr. Serenity’s informal research has proven otherwise. RandomAlarm™ will help." 
            page={page} 
            icon="images/icons/RandomTask.svg"
            />
            <Icon 
            title="RandomNourish™"
            content="RandomAlarm™ tells you when to eat based on random science. Not eating on a set schedule keeps your blood sugar at random levels throughout the day." 
            page={page} 
            icon="images/icons/RandomNourish.svg"
            />
          </div>
        </div>
        {/* container */}
        </section>
    )
}