import React from "react";
import "./button.css"

export default function Button({text}){
    return(
        <a className="btn btn-primary session-button" href="#" role="button">{text}</a>
    )
}


