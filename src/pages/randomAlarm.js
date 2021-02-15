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
        <footer id="footer">
        </footer>
    </Layout>
    </>
    
  )
}