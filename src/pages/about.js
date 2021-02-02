import React from "react"
import Header from '../components/header'
import {Link} from "gatsby"
import Layout from "../components/layout"

export default function About() {
  return(
      <Layout>
        <div style={{ color: `teal` }}>
            <Link to="/">Home</Link>
        <Header headerText="About Gatsby"/>
        <Header headerText="How is this different than react?"/>
        <p>Such wow. Very React.</p>
        </div>
      </Layout>
    
  ) 
}
