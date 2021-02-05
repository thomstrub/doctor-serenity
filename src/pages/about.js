import React from "react"
import './index.css'
import Header from '../components/header'
import {Link} from "gatsby"
import Layout from "../components/layout"
import {Helmet} from "react-helmet"
import RandomAlarmBlurb from "../components/randomAlarmBlurb/randomAlarmBlurb"

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
      <Layout>
      <div id="page-container">

      <section class="hero-img">
      <div class="container">
        <div class="row">
        <div class="col-md-12">
          <h2 class="hero">Forget the mistake. Remember the lesson.</h2>
        </div>
      </div>
      </div>

      </section>

      <section>
      <div class="container">
      <div class="row">
        <div class="col-md-3 offset-md-2">
          <img src="_Images/i-am-dr-serenity.png" alt="Dr. Serenity" class="img-fluid"/>
        </div>
        <div class="col-md-5">
          <h2>I’m Dr. Serenity™</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, erat cras ante erat imperdiet eget augue quis a. Volutpat tincidunt fermentum, lobortis purus sed amet. Nibh elementum arcu scelerisque interdum. Netus in id libero leo sed penatibus.
          </p>
        </div>

      </div>
      </div>
      </section>

      <section class="row-grey-bg">
      <div class="container">
      <div class="row">
        <div class="container">
          <h2>I’m accredited in many areas.</h2>
        </div>
        <div class="col-md-4">
          <img src="_Images/about-accredidation-dogtraining.png" alt="Dog Training" class="img-fluid"/>
          <h3>Dog Training</h3>
          <p>
            My experience as a dog trainer* has lent itself to the world of Life Coaching. You’d be surprised how much humans and dogs are alike! They just need a little discipline.
          </p>
          <p class="small caption">*not formally certified</p>
        </div>

        <div class="col-md-4">
          <img src="_Images/about-accredidation-doctorofdivinity.png" alt="Certified Dr. of Divinity" class="img-fluid"/>
          <h3>Doctor of Divinity</h3>
          <p>
            You can obtain the Doctor of Divinity Degree through the Universal Life Church. When you order this custom 8.5" x 11" frameable certificate, they send it out to be hand-lettered in beautiful calligraphy by the church scribe. It is printed on high quality paper, with a standard frame sizing and features the gold church seal.
          </p>
        </div>

        <div class="col-md-4">
          <img src="_Images/about-accredidation-hazmat.png" alt="Hazmat Training Experience" class="img-fluid"/>
          <h3>Hazmat Certification</h3>
          <p>
            In order to receive a hazmat certification, employees must participate in general awareness or familiarization training conducted by a verified HAZMAT consultant. Participants will have a basic understanding of the following fundamentals: The Identification of Hazardous Materials. The Hazard Classification System.      
          </p>
        </div>

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
