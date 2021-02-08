import React from "react"
import './index.css'
import { Link } from "gatsby"
import Layout from "../components/layout"
import {Helmet} from "react-helmet"

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
    <Layout>
    <div className="container-md" style={{marginBottom: "50px", marginTop: "50px"}}>
    <h1 className="display-3">Get in touch to begin your journey.</h1>
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
                <label for="exampleFormControlTextarea1">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
            </div>
            <button type="button" className="btn btn-primary btn-lg">Submit</button>
        </form>
    </div>
    <footer id="footer">
    </footer>
    </Layout>
    </>
    
  )
}