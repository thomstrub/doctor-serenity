import React from "react";
import './index.css';
// import { Link } from "gatsby"
import {Helmet} from "react-helmet";
import Layout from "../components/layout";
import Hero from "../components/hero/hero";
import ButtonElem from "../components/buttonElem/buttonElem"

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
          <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap" rel="stylesheet"/>
    </Helmet>
    <Layout page="Contact">
    <Hero image='images/contact_hero.jpg' blurb="There is peace even in the storm."/>
    <div className="container-md" style={{marginBottom: "50px", marginTop: "50px"}}>
    <h2 className="h2heading">Get in touch to begin your journey.</h2>
    </div>
    <div className="container" style={{marginBottom: "100px", marginTop: "50px"}}>
        <form className="email">
            <div className="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div className="form-group">
                <label for="exampleFormControlSelect1">Subject</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>New Client Application</option>
                  <option>Services Inquiry</option>
                  <option>Complaint: My appointment was canceled</option>
                  <option>Complaint: I am having trouble taking your advice</option>
                  <option>Complaint: I've hired a lawyer</option>
                </select>
            </div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Complaint</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
            </div>
            <ButtonElem type="button" className="btn btn-primary btn-lg" text="Submit"/>
        </form>
    </div>
    </Layout>
    </>
    
  )
}