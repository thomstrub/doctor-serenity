import React from "react"
import {Link} from "gatsby"
import {Helmet} from "react-helmet"
import Layout from '../components/layout'

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
      <div style={{ color: `purple`, fontSize: `72px` }}>Doctor Serenity</div>
      <div style={{color: 'purple'}}> <p>What a world</p></div>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      <div>
        <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
        <p>
          What do I like to do? Lots of course but definitely enjoy building
          websites.
        </p>
      </div>
    </Layout>
    
    </>
  ) 
}
