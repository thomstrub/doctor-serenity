import React, {useState} from "react"
import './index.css'
import Layout from "../components/layout"
import {Helmet} from "react-helmet"
import Hero from "../components/hero/hero"
import RandomApp from "../components/randomApp/randomApp"
import RandomAlarmBlurb from "../components/randomAlarmBlurb/randomAlarmBlurb"
import Fundamentals from "../components/fundamentals/fundamentals"
import Icon from "../components/icon/icon"

export default function Contact() {
    const [state, setState] = useState({
        page: "services"
      });
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
    </Helmet>
    <Layout page="RandomAlarm™">
        <Hero image='_Images/business.jpg' blurb="Expose yourself to as much randomness as possible."/>
        <RandomApp />
        <Fundamentals />
        <section>
        <div className="container">
          <div className="row">
            <div className="container">
              <h2 className="h2heading">Coaching Techniques</h2>
            </div>
            <Icon content="RandomNap™" page={state.page} icon="_Images/icon-sleep.svg"/>
            <Icon content="RandomTask™" page={state.page} icon="_Images/icon-work.svg"/>
            <Icon content="RandomNourish™" page={state.page} icon="_Images/icon-eat.svg"/>
          </div>
        </div>
        {/* container */}
        </section>
        <section className="row-grey-bg">
            <div className="container" style={{padding: "50px"}}>
                <div className="row">
                    <div className="col-md-5 offset-md-1">
                        <img src="_Images/alarm-clock.png" alt="alarm clock" className="img-fluid"/>
                        
                    </div>
                    <div className="col-md-6">
                    <h2 className="services-header">Inspired by technology</h2>
                        <p className="services-text">I was inspired by technology and the nature of randomness to create RandomAlarm™. Harness the un-harnessed power of randomness to achieve your ultimate goals.</p>
                        
                    </div>

                </div>
            </div>
        </section>
        <section >
            <div className="container" style={{padding: "50px"}}>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                    <h2 className="h2heading">What are you waiting for? Download RandomAlarm™ today.</h2>
                        <img src="_Images/btn-download.png" alt="download" className="img-fluid"/>
                        
                    </div>
                    

                </div>
            </div>
        </section>
        <footer id="footer">
        </footer>
    </Layout>
    </>
    
  )
}