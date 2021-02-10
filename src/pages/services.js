import React, {useState} from "react"
import './index.css'
import Layout from "../components/layout"
import Icon from "../components/icon/icon"
import {Helmet} from "react-helmet"
import Hero from "../components/hero/hero"
import Stressball from "../components/stressball/stressball"



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
              <h2>Coaching Techniques</h2>
            </div>
            <Icon content="Persistent Goading" page={state.page}/>
            <Icon content="RandomAlarm™" page={state.page}/>
            <Icon content="Relentless Advice" page={state.page}/>
          </div>
        </div>
        {/* container */}
        </section>
        <Stressball />
    <footer id="footer">
    </footer>
    </Layout>
    </>
    
  )
}