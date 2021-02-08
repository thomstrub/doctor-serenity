import React from "react"
import './header.css'
import { Link } from "gatsby"
import {Nav} from 'react-bootstrap'

const ListLink = props => (
    <li className= "nav-item">
        <Link className="nav-link active" to={props.to}>{props.children}</Link>
    </li>
)


export default function Header() {
  return(
      <>
        <div className="container">
            <div className="logo">
                <img style={{maxWidth: "20vw", display: "inline"}} src="_Images/logo.jpg"  alt="Dr. Serenity Life Coaching" />
            </div>
        <ul className= "nav justify-content-center">
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about">About</ListLink>
            <ListLink to="/services">Services</ListLink>
            <ListLink to="/contact">Contact</ListLink>
        </ul>
        </div>

      </>
  )
    
}