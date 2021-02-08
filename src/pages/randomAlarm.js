import React from "react"
import './index.css'
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
    Random Alarm
    <footer id="footer">
    </footer>
    </Layout>
    </>
    
  )
}