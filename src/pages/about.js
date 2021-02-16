import React from "react"
import './index.css'
import {Link} from "gatsby"
import Layout from "../components/layout"
import {Helmet} from "react-helmet"
import RandomAlarmBlurb from "../components/randomAlarmBlurb/randomAlarmBlurb"
import Accredation from "../components/accredation/accredation"
import Hero from "../components/hero/hero"

export default function About() {
  return(
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
      <Layout page="About">
      <div id="page-container">

      <Hero image="_Images/inner_peace.png" blurb="Forget the mistake. Remember the lesson." />

      <section>
        <div className="container">
        <div className="row padding-div">
          <div className="col-md-3 offset-md-2">
            <img src="_Images/i-am-dr-serenity.png" alt="Dr. Serenity" className="serenity-photo"/>
          </div>
          <div className="col-md-5 offset-1" >
            <h2 className="h2heading" style={{textAlign: "left", marginBottom: "30px"}}>I’m Dr. Serenity™</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, erat cras ante erat imperdiet eget augue quis a. Volutpat tincidunt fermentum, lobortis purus sed amet. Nibh elementum arcu scelerisque interdum. Netus in id libero leo sed penatibus.
            </p>
          </div>

        </div>
        </div>
      </section>

      <section className="row-grey-bg">
      <div className="container">
      <div className="row">
        <div className="container">
          <h2 className="h2heading">I’m accredited in many areas.</h2>
        </div>

        <Accredation 
          name="Dog Training" 
          blurb="My experience as a dog trainer* has lent itself to the world of Life Coaching. You’d be surprised how much humans and dogs are alike! They just need a little discipline." 
          image="_Images/about-accredidation-dogtraining.png"
          caption="*not formally certified"
          />
        <Accredation 
          name="Doctor of Divinity" 
          blurb="You can obtain the Doctor of Divinity Degree through the Universal Life Church. When you order this custom 8.5 x 11 inch frameable certificate, they send it out to be hand-lettered in beautiful calligraphy by the church scribe. It is printed on high quality paper, with a standard frame sizing and features the gold church seal." 
          image="_Images/about-accredidation-doctorofdivinity.png"
          />
        <Accredation 
          name="Hazmat Training" 
          blurb="In order to receive a hazmat certification, employees must participate in general awareness or familiarization training conducted by a verified HAZMAT consultant. Participants will have a basic understanding of the following fundamentals: The Identification of Hazardous Materials. The Hazard ClassNameification System." 
          image="_Images/about-accredidation-hazmat.png"
          />

      </div>
      </div>
      </section>

      <section>
      <RandomAlarmBlurb title="Inventor of RandomAlarm™" />
      </section>

      <footer id="footer"></footer>

      </div>
      </Layout>
    </>
  ) 
}
