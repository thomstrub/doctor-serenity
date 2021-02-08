import React from 'react';
import './accredation.css'

export default function Accredation({blurb, name, image, caption}){
    return(
        <div className="col-md-4">
            <img src={image} alt={name} className="img-fluid"/>
            <h3>{name}</h3>
            <p>
            {blurb}
            </p>
            <p className="small caption">{caption}</p>
        </div>
    )
}