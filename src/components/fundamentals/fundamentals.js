import React from 'react';
import "./fundamentals.css"
import ButtonElem from '../buttonElem/buttonElem'

export default function Fundamentals(){
    return(
        <section className="row-grey-bg">
        <div className="container" style={{padding: "50px"}}>
            <div className="row">
                <div className="col-md-6 offset-md-1">
                    <h2 className="">Core Fundamentals</h2>
                    <p className="fundamentals">
                        My research and past experience have informed my proprietary techniques. I have found that “sleep”, “work”, and “diet” are the key ingredients to measured success. I have innovated three proprietary methods that coordinate with each measured success. Together, they are called RandomAlarm™.
                    </p>
                    <ButtonElem text="Book a session now" target="contact"></ButtonElem>
                </div>
                <div className="col-md-4">
                    <img src="images/random_ven.png" alt="random-ven" className="img-fluid"/>
                </div>

            </div>
        </div>
        </section>
    )
}