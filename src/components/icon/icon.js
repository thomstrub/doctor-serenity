import React from 'react';
import './icon.css'

export default function Icon({title, content, page, icon}){
    return(
        <div className={page === "index" ? "col-md-3" : "col-md-4"}>
            <img src={icon} alt={title} className="icon"/>
            <h3 className="icon-heading">{title}</h3>
            <p id="p-center">{content}</p>
        </div>
    )
}