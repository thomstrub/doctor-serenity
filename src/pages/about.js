import React from "react"
import './index.css'
// import {Link} from "gatsby"
import {Helmet} from "react-helmet";
import Layout from "../components/layout";
import Hero from "../components/hero/hero";
import Accredation from "../components/accredation/accredation";
import AlarmBlurb from "../components/alarmBlurb/alarmBlurb";

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
          <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap" rel="stylesheet"/>
      </Helmet>
      
      <Layout page="About">
      <div id="page-container">

      <Hero 
        image="images/about_hero.jpg" 
        blurb="If your dreams don’t scare you, they’re too small." 
      />

      <section>
        <div className="container">
        <div className="row padding-div">
          <div className="col-md-3 offset-md-2">
            <img src="images/i_am_dr_serenity.jpg" alt="Dr. Serenity" className="serenity-photo"/>
          </div>
          <div className="col-md-5 offset-1" >
            <h2 className="h2heading" style={{textAlign: "left", marginBottom: "30px"}}>I’m Dr. Serenity™</h2>
            <p>
              I can help you live your life the largest potential of your fullest self. A dream is just a dream until you forge it in the flames of fate and hammer it to your will. I can do just about anything, I just feel more alive doing it.
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
          image="images/dog_training.jpg"
          caption="*not formally certified"
          />
        <Accredation 
          name="Doctor of Divinity" 
          blurb="You can obtain the Doctor of Divinity Degree through the Universal Life Church. When you order this custom 8.5 x 11 inch frameable certificate, they send it out to be hand-lettered in beautiful calligraphy by the church scribe. It is printed on high quality paper, with a standard frame sizing and features the gold church seal." 
          image="images/doctor_divinity.jpg"
          />
        <Accredation 
          name="Hazmat Training" 
          blurb="In order to receive a hazmat certification, employees must participate in general awareness or familiarization training conducted by a verified HAZMAT consultant. Participants will have a basic understanding of the following fundamentals: The Identification of Hazardous Materials. The Hazard ClassNameification System." 
          image="images/hazmat_certification.jpg"
          />

      </div>
      </div>
      </section>

      <section>
      <AlarmBlurb title="Inventor of RandomAlarm™" />
      </section>

      

      </div>
      </Layout>
    </>
  ) 
}
