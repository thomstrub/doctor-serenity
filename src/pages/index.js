import React from "react";
import "./index.css";
import {Helmet} from "react-helmet";
import Layout from '../components/layout';
import HomeHero from '../components/homeHero/homeHero';
import Icon from '../components/icon/icon';
import AlarmBlurb from '../components/alarmBlurb/alarmBlurb';
import Testimonial from '../components/testimonial/testimonial'
import Stressball from '../components/stressball/stressball'
import SmallHomeHero from "../components/smallHomeHero/smallHomeHero";

// import Footer from '../components/footer/footer'


export default function Home() {
  let heroElem;
  const mediaQuery = window.matchMedia('(min-width: 768px)')

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    console.log('Media Query Matched!')
    heroElem = <HomeHero />;
  } else {
    console.log('Not Matched');
    heroElem = <SmallHomeHero/>;

  }
}

// Register event listener
mediaQuery.addListener(handleTabletChange)

// Initial check
handleTabletChange(mediaQuery)
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
    <Layout page="Home">
    <div  id="page-container">

        {heroElem}
        
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
              page="home" 
              icon="/images/icons/Well-being.png"/>
            <Icon 
              title="Productivity" 
              content="We often assume that productivity means getting more things done each day. WRONG! Productivity is getting important things done constantly." 
              page="home" 
              icon="/images/icons/Productivity.svg"/>
            <Icon 
              title="Bad Habits"
              content="Breaking habits can be difficult, especially if you’ve been engaging in them for a long time. But understanding how habits form in the first place can easve the process."
              page="home" 
              icon="/images/icons/Bad_habits.svg"/>
            <Icon 
              title="Relationships" 
              content="All relationships go through ups and downs and they all take work, commitment, and a willingness to adapt and change with your partner. "
              page="home" 
              icon="images/icons/Relationships.svg"/>
          </div>
        </div>
        {/* container */}
        </section>

        <section className="row-grey-bg">
            <AlarmBlurb title="RandomAlarm™"/>
        </section>

        <section>
        <div className="container">
        <div className="row">
          <div className="col-md-6 offset-3">
            <h2 className="h2heading">Don’t take my word for it. See what some of my clients have to say.</h2>
          </div>
          <div className="row">
          <Testimonial name="Tara S." image="images/Tara.jpg" blurb="I’m sleeping less than ever due to Dr. Serenity™’s RandomAlarm™! I’m really tired all the time but oddly still able to function. It really works!"/>
          <Testimonial name="Theresa S." image="images/Tara.jpg" blurb="Dr. Serenity™’s persistent nagging really gets me motivated. Yet he somehow has a calming effect on me, but that could just be all the magnesium."/>
          <Testimonial name="Tiffany S." image="images/Tiffany.jpg" blurb="After participating in Dr. Serenity™’s Proprietary Dress for Serenity™ Program, I look and feel more serene than ever. I feel confident in whatever I wear."/>
          </div>
        </div>
        </div>
        {/* container */}
        </section>

        <section className="row-grey-bg" style={{marginBottom: "0"}}>
            <Stressball target="contact"/>
        </section>

      

      </div>
        {/* page conatiner */}
    </Layout>
    
    </>
  ) 
}
