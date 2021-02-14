import React from 'react';
import './icon.css'

export default function Icon({content, page}){
    return(
        <div className={page === "index" ? "col-md-3" : "col-md-4"}>
            <img src="_Images/icon-work.svg" alt={content} className="icon"/>
            <h3 className="icon-heading">{content}</h3>
            <p id="p-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut adipiscing semper magna at. Lectus viverra sapien.</p>
        </div>
    )
}