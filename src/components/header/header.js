import React from "react"
import './header.css'
import { Link } from "gatsby"
import { Nav, Navbar } from 'react-bootstrap'

const ListLink = props => (
    <Nav.Item as={Link} className="nav-link active" to={props.to}>
        {props.children}
        
    </Nav.Item>
    
)


export default function Header() {
  return(
      <>
        <Navbar style={{display: "flex", justifyContent: "space-between"}}>
        <Navbar.Brand as={Link} to="/">
            <img
                alt=""
                src="_Images/logo.jpg"
                width="300"
                
                className="d-inline-block"
            />{' '}
            </Navbar.Brand>
            <Nav className="justify-content-end">
            
                <ListLink to="/">Home</ListLink>
                <ListLink to="/about">About</ListLink>
                <ListLink to="/services">Services</ListLink>
                <ListLink to="/contact">Contact</ListLink>
            
        </Nav>
        </Navbar>
        
      </>
  )
    
}