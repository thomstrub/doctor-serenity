import React, {useState, useEffect} from "react"
import "./index.css"
import {Helmet} from "react-helmet"
import Layout from '../components/layout'
import Icon from '../components/icon/icon'
import Testimonial from '../components/testimonial/testimonial'
import RandomAlarmBlurb from '../components/randomAlarmBlurb/randomAlarmBlurb'
import Stressball from '../components/stressball/stressball'
import Button from '../components/button/button'
import Footer from '../components/footer/footer'


export default function Home() {
  const [state, setState] = useState({
    page: "index"
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
    <Layout page="Home">
    <div  id="page-container">
        <section className="container-fluid" style={{background: "url('_Images/water.jpg') no-repeat center", height: "100%", padding: "30px 0 -5 0"}} >
            <div className="row">
              <div className="hero-row">

              
              <div className="col-md-3 offset-md-1">
                    <img style={{maxHeight: "32vw", minHeight: "300px", marginTop:"20px", borderRadius: "6px"}} className="image  the_doctor" src="_Images/the_doctor.png" className="img-fluid" alt="Doctor Serenity"/>
                </div>
            <div className="col-md-6 offset-1" style={{minHeight: "300px", display: "flex", }}>
          
            <div className="container-fluid">
              <h2 className="hero" style={{color: "black"}}>Do you need help getting your life <strong>together</strong>? Look no further.</h2>
              <p className="hero-sub">Let Dr. Serenity™ lead you through a life-changing journey with guaranteed* results.</p>
              <Button text="Book a session now"/>
              <p className="footnote">*not legally binding</p>
            </div>
          </div>
          </div>
          </div>

        </section>
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
              <h2 className="h2heading">Here are just a few areas Dr. Serenity™  specializes in.</h2>
            </div>
            <Icon 
              title="Well-being" 
              content="Well-being, also known as wellness, prudential value or quality of life, refers to what is intrinsically valuable relative to someone." 
              page={state.page} 
              icon="_Images/svg/Well-being@2x.png"/>
            <Icon 
              title="Productivity" 
              content="We often assume that productivity means getting more things done each day. WRONG! Productivity is getting important things done constantly." 
              page={state.page} 
              icon="_Images/svg/Productivity.svg"/>
            <Icon 
              title="Bad Habits"
              content="Breaking habits can be difficult, especially if you’ve been engaging in them for a long time. But understanding how habits form in the first place can easve the process."
              page={state.page} 
              icon="_Images/svg/Bad_habits.svg"/>
            <Icon 
              title="Relationships" 
              content="All relationships go through ups and downs and they all take work, commitment, and a willingness to adapt and change with your partner. "
              page={state.page} 
              icon="_Images/svg/Relationships.svg"/>
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
          <div className="col-md-6 offset-3">
            <h2 className="h2heading">Don’t take my word for it. See what some of my clients have to say.</h2>
          </div>
          <div className="row">
          <Testimonial name="Tara S." image="_Images/testimonial-tara.jpeg" blurb="I’m sleeping less than ever due to Dr. Serenity™’s RandomAlarm™! I’m really tired all the time but oddly still able to function. It really works!"/>
          <Testimonial name="Theresa S." image="_Images/testimonial-theresa.jpeg" blurb="Dr. Serenity™’s persistent nagging really gets me motivated. Yet he somehow has a calming effect on me, but that could just be all the magnesium."/>
          <Testimonial name="Tiffany S." image="_Images/testimonial-tiffany.jpg" blurb="After participating in Dr. Serenity™’s Proprietary Dress for Serenity™ Program, I look and feel more serene than ever. I feel confident in whatever I wear."/>
          </div>
        </div>
        </div>
        {/* container */}
        </section>

        <section className="row-grey-bg" style={{marginBottom: "0"}}>
            <Stressball />
        </section>

      

      </div>
        {/* page conatiner */}
    </Layout>
    
    </>
  ) 
}
