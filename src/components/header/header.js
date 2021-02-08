import React from "react"
import './header.css'
import { Link } from "gatsby"
import { Nav, Navbar } from 'react-bootstrap'

const ListLink = props => (
    <Nav.Item>
        <li className= "nav-item">
        <Link className="nav-link active" to={props.to}>{props.children}</Link>
        </li>
    </Nav.Item>
    
)


export default function Header() {
  return(
      <>
        <Navbar >
        <Navbar.Brand href="#home">
            <img
                alt=""
                src="_Images/logo.jpg"
                width="200"
                
                className="d-inline-block align-top"
            />{' '}
            React Bootstrap
            </Navbar.Brand>
        </Navbar>
        <Nav className="justify-content-end">
            <div className="logo">
                <img style={{maxWidth: "20vw", display: "inline"}} src="_Images/logo.jpg"  alt="Dr. Serenity Life Coaching" />
            </div>
        <ul className= "nav justify-content-center">
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about">About</ListLink>
            <ListLink to="/services">Services</ListLink>
            <ListLink to="/contact">Contact</ListLink>
        </ul>
        </Nav>
        <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
            <ListLink to="/">Home</ListLink>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
                Disabled
            </Nav.Link>
        </Nav.Item>
  </Nav>
      </>
  )
    
}