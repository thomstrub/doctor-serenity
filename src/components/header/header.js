import React from "react"
import './header.css'
import { Link } from "gatsby"
import { Nav, Navbar } from 'react-bootstrap'

const ListLink = props => (
    <Nav.Item as={Link} className="nav-link active link" to={props.to}>
        {props.children === props.page ? <strong>{props.children}</strong> : props.children} 
    </Nav.Item>
    
)


export default function Header({page}) {
  return(
      <>
        <div className="container header">
        <Navbar style={{display: "flex", justifyContent: "space-between"}}>
        <Navbar.Brand as={Link} to="/">
            <img
                alt=""
                src="images/serenityLogo.png"
                width="110 px"
                
                className="d-inline-block"
            />{' '}
            </Navbar.Brand>
            <Nav className="justify-content-end nav-links">
            
                <ListLink to="/" page={page}>Home</ListLink>
                <ListLink to="/about" page={page}>About</ListLink>
                <ListLink to="/services" page={page}>Services</ListLink>
                <ListLink to="/randomAlarm" page={page}>RandomAlarm™</ListLink>
                <ListLink to="/contact" page={page}>Contact</ListLink>
            
        </Nav>
        </Navbar>
        </div>
      </>
  )
    
}