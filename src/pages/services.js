import React, {useState} from "react"
import './index.css'
import Layout from "../components/layout"
import Icon from "../components/icon/icon"
import {Helmet} from "react-helmet"
import Hero from "../components/hero/hero"
import Stressball from "../components/stressball/stressball"
import Services from "../components/services/services"



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
    <Layout page="Services">
        <Hero image='_Images/water.jpg' blurb="If your dreams don’t scare you, they’re too small."/>
        <section>
        <div className="container">
          <div className="row">
            <div className="container">
              <h2 className="h2heading">Coaching Techniques</h2>
            </div>
            <Icon content="Persistent Goading" page={state.page} icon="_Images/icon-work.svg"/>
            <Icon content="RandomAlarm™" page={state.page} icon="_Images/icon-work.svg"/>
            <Icon content="Relentless Advice" page={state.page} icon="_Images/icon-work.svg"/>
          </div>
        </div>
        {/* container */}
        </section>
        <section className="row-grey-bg" style={{marginBottom: "0"}}>
            <Services title="One-on-One Personal Coaching" 
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam arcu bibendum egestas felis risus quis arcu et dictumst. Aliquam sit ornare et aliquet. Enim ut habitant felis non dolor. Aenean euismod leo nunc arcu sed ornare. Paired with RandomAlarm™, this is a sure-fire method to get your life back on track."
                />
            <Services title="Text Coaching" 
            text="Are you too poor to afford regular coaching? I’m also available for text coaching. Paired with RandomAlarm™, this is a fool-proof method to get your life back on track."
            />
            <Services title="Motivational Speaking" 
                text="I’ve given lots of life advice to most people I meet. My dream is to speak at a TED Conference LLC. Although I don’t have formal experience in motivational speaking, you can count on me to engage with any audience and give great Life Coaching advice."
            />
            <Services title="Style coaching: Dress for Deeper Serenity"
                text="The power of clothes: what you wear affects your emotions. Dress like a champion to feel like a champion. I’ll help you hone in on your unique style and truly express yourself."
            />
        </section>
        <section className="row" style={{marginBottom: "0"}}>
            <Stressball page={state.page}/>
        </section>
    <footer id="footer">
    </footer>
    </Layout>
    </>
    
  )
}