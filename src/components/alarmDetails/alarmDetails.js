import React from 'react';
import Icon from '../icon/icon'

export default function AlarmDetails({state}){
    return(
        <section>
        <div className="container">
          <div className="row">
            <div className="container">
              <h2 className="h2heading">RandomAlarm™</h2>
            </div>
            <Icon 
              title="RandomNap™"
              content="RandomAlarm™ gently notifies you at random times throughout the day when you should take a nap or wake from restfulness. Frequent naps lead to frequent productivity and well-being." 
              page={state.page} 
              icon="_Images/icon-sleep.svg"
              />
            <Icon 
            title="RandomTask™"
            content="Starting and stopping work at random times throughout the day may seem counterintuitive, but Dr. Serenity’s informal research has proven otherwise. RandomAlarm™ will help." 
            page={state.page} 
            icon="_Images/icon-work.svg"
            />
            <Icon 
            title="RandomNourish™"
            content="RandomAlarm™ tells you when to eat based on random science. Not eating on a set schedule keeps your blood sugar at random levels throughout the day." 
            page={state.page} 
            icon="_Images/icon-eat.svg"
            />
          </div>
        </div>
        {/* container */}
        </section>
    )
}