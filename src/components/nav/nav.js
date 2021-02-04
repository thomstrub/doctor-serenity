import React from "react"
import './nav.css'
import { Link } from "gatsby"

const ListLink = props => (
    <li className= "nav-item">
        <Link className="nav-link active" to={props.to}>{props.children}</Link>
    </li>
)


export default function Nav() {
  return(
      <>
        <div className="container">
            <div className="logo">
                <img src="https://lh3.googleusercontent.com/1fKWXYNE_8YphKAyNd4sm8OD2Y70FV9a1i1JPZ8D4v3cD3r04IT3LbAuiZuSCS_KGnNYmc_peXPAHHSJFOXA2HAw6dk-EDPZtaT0imTenmkbdBwE_JLovBXgPPiOMJjdfj0gooxRMHqOLaiCu0NpJYSEvXLj2NM3KMtBfchwGDd8dMWDCMZZBbCBG9WYUMyv-lNZuIoPSBDs-BmAcVPHk1I3LF4XqC6p5U7cjYo1TjOGrxHIKievvXB0Cllq6za8qPwfdh8A1U4SoUy5MIRMNigX1ys6qfmfdgOefdWSJ20LHsoBfgAwLu9z9lGOYDChB3wXvBOgYM_vDOqeR4-jhqf165-DgsqjCv5OGIeR7dWbjRdJACnF6xiJfRkICysBsvxrmSrzjKQIGBpFGxlIdQSRSLg8WCIgtTHmZTmxbfZUQ3kIpghe5rkt9IGyt5sUz08moP6LhIOZz0YTeq2ErUm0DzYFXywqGMiz4mk0Cxum5lnpmUMtjPoBqd5vQd1K-RCpoNH-XdqdFoZT7f01pf-6M1xK1rh_1Ogq8iVN0PQBW2wedKh7taZNhzvO8pV79t1VIuMWLaZ_5ImlnO272YSoXTyDowyh3ib58YyyLKsHOCvQyKXxdnQ9SqtsaqXW2boBC6BbnhAqwYiq2lEU875QZ5IBbExiKWX4zNTNwZrFpIyi8Y5uWJRUhhMrKA=w600-h218-no?authuser=0"  alt="Dr. Serenity Life Coaching" />
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