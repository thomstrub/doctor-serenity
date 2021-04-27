import React from "react";
import './index.css';
import {Helmet} from "react-helmet";
import Layout from "../components/layout";
import Hero from "../components/hero/hero";
import Icon from "../components/icon/icon";
import ButtonElem from "../components/buttonElem/buttonElem";
import Services from "../components/services/services";
import Stressball from "../components/stressball/stressball";




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
    </Helmet>
    <Layout page="Services">
        <Hero image='images/services_hero.jpg' blurb="Forget the mistake. Remember the lesson."/>
        <section>
        <div className="container">
          <div className="row">
            <div className="container">
              <h2 className="h2heading">Coaching Techniques</h2>
            </div>
            <Icon 
                title="Persistent Goading" 
                content="Accountability is key. Nothing gets you motivated more than peristent texts, phone calls, and emails from your personal coach."
                page="services" 
                icon="/images/icons/Goad.svg"   
            />
            <Icon 
                title="RandomAlarm™" 
                content="I incorporate my proprietary start-and-stop task management system into all of my coaching techniques. Harness the power of random."
                page="services" 
                icon="/images/icons/Technique_RandomAlarm.svg"
            />
            <Icon 
                title="Relentless Advice"
                content="If you're not asking for advice, you probably need it. We'll establish an open line of communication for you to get advice 24 hours a day!" 
                page="services" 
                icon="/images/icons/Advice.svg"
            />
          </div>
          <div className="row">
            <div className="col-md-4 offset-3" style={{display: "flex", justifyContent: "center"}}>
                <ButtonElem  text="Contact me"/>
            </div>
          </div>
        </div>
        {/* container */}
        </section>
        <section className="row-grey-bg" style={{marginBottom: "0"}}>
    
            <Services 
                title="Text Coaching"
                image="images/text_coaching.jpg" 
                text="Are you too poor to afford regular coaching? I’m also available for text coaching. Paired with RandomAlarm™, this is a fool-proof method to get your life back on track."
            />
            <Services 
                title="Motivational Speaking"
                image="images/motivational_speaking.jpg" 
                text="I’ve given lots of life advice to most people I meet. My dream is to speak at a TED Conference LLC. Although I don’t have formal experience in motivational speaking, you can count on me to engage with any audience and give great Life Coaching advice."
            />
            <Services 
                title="Style coaching: Dress for Deeper Serenity"
                image="images/style_coaching.jpg"
                text="The power of clothes: what you wear affects your emotions. Dress like a champion to feel like a champion. I’ll help you hone in on your unique style and truly express yourself."
            />
        </section>
        <section className="row" style={{marginBottom: "0"}}>
            <Stressball page="services"/>
        </section>
   
    </Layout>
    </>
    
  )
}