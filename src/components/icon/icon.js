import React from 'react';
import './icon.css'

export default function Icon({content}){
    return(
        <div class="col-md-3">
            <img src="_Images/icon-work.svg" alt={content} class="icon"/>
            <h2>{content}</h2>
            <p id="p-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut adipiscing semper magna at. Lectus viverra sapien.</p>
        </div>
    )
}