import React, {useState} from "react";
import './index.css';
import {Helmet} from "react-helmet";
import Layout from "../components/layout";
import Hero from "../components/hero/hero";
import RandomApp from "../components/randomApp/randomApp";
import Fundamentals from "../components/fundamentals/fundamentals";
import AlarmDetails from "../components/alarmDetails/alarmDetails";

export default function Contact() {
   
  return (
    <>
    <Helmet>
          <meta charSet="utf-8" />
          <title>Doctor Serenity</title>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossorigin="anonymous"
          />
          <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap" rel="stylesheet"/>
    </Helmet>
    <Layout page="RandomAlarm™">
        <Hero image='images/random_hero.jpg' blurb="Expose yourself to as much randomness as possible."/>
        <RandomApp />
        <Fundamentals />
        <AlarmDetails page="randomAlarm"/>
        
        <section className="row-grey-bg">
            <div className="container" >
                <div className="row">
                    <div className="col-md-5 offset-md-1">
                        <img src="images/alarm_clock.jpg" alt="alarm clock" className="img-fluid"/>
                        
                    </div>
                    <div className="col-md-6">
                    <h2 className="services-header">Inspired by technology</h2>
                        <p className="services-text">I was inspired by technology and the nature of randomness to create RandomAlarm™. Harness the un-harnessed power of randomness to achieve your ultimate goals.</p>
                        
                    </div>

                </div>
            </div>
        </section>
        <section >
            <div className="container" >
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                    <h2 className="h2heading">What are you waiting for? Download RandomAlarm™ today.</h2>
                        <img src="images/RandomAppStore_White.png" alt="download" className="img-fluid"/>
                        
                    </div>
                    

                </div>
            </div>
        </section>
        
    </Layout>
    </>
    
  )
}