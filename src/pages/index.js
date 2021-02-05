import React from "react"
import "./index.css"
import {Helmet} from "react-helmet"
import Layout from '../components/layout'
import Icon from '../components/icon/icon'
import Testimonial from '../components/testimonial/testimonial'
import RandomAlarmBlurb from '../components/randomAlarmBlurb/randomAlarmBlurb'
import Stressball from '../components/stressball/stressball'

export default function Home() {
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
    <Layout>
    <div  id="page-container">

        <section className="row-grey-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <h2 id="home-quote">
                Live a healthier, wealthier, more fulfilling, passionate and purposeful life – whether that means achieving in business, reigniting your relationship or discovering who you really are.
              </h2>
            </div>
          </div> 
        </div>
        {/* container */}
        </section>

        <section>
        <div className="container">
          <div className="row">
            <div className="container">
              <h2>Here are just a few areas Dr. Serenity™  specializes in.</h2>
            </div>
            <Icon content="Well-being" />
            <Icon content="Productivity" />
            <Icon content="Finding Purpose" />
            <Icon content="Relationships" />
          </div>
        </div>
        {/* container */}
        </section>

        <section className="row-grey-bg">
            <RandomAlarmBlurb title="RandomAlarm™"/>
        </section>

        <section>
        <div className="container">
        <div className="row">
          <div className="container">
            <h2>Don’t take my word for it. See what some of my clients have to say.</h2>
          </div>
          <Testimonial name="Tara S." image="_Images/testimonial-tara.jpeg" blurb="I’m sleeping less than ever due to Dr. Serenity™’s RandomAlarm™! I’m really tired all the time but oddly still able to function. It really works!"/>
          <Testimonial name="Theresa S." image="_Images/testimonial-theresa.jpeg" blurb="Dr. Serenity™’s persistent nagging really gets me motivated. Yet he somehow has a calming effect on me, but that could just be all the magnesium."/>
          <Testimonial name="Tiffany S." image="_Images/testimonial-tiffany.jpeg" blurb="After participating in Dr. Serenity™’s Proprietary Dress for Serenity™ Program, I look and feel more serene than ever. I feel confident in whatever I wear."/>

        </div>
        </div>
        {/* container */}
        </section>

        <section className="row-grey-bg" style={{marginBottom: "0"}}>
            <Stressball />
        </section>

        <footer id="footer"></footer>

      </div>
        {/* page conatiner */}
    </Layout>
    
    </>
  ) 
}
