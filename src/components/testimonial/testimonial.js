import React from 'react';
import './testimonial.css'

export default function Testimonial({blurb, name, image}){
    return(
        <div className="col-md-4">
            <p className="testimonial-blurb">
            {blurb}
            </p>
            <img src={image} alt="Tara" className="testimonial-photo"/>
            <p className="testimonial-name">{name}</p>
            <p className="small caption">This testimonial was submitted by a paid participant</p>
        </div>
    )
}