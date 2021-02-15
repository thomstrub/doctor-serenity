import React from "react";
import "./button.css"

export default function Button({text}){
    return(
        <div className="col-md-3">
             <a 
                className="teal-button btn btn-primary session-button " 
                href="#" 
                role="button">{text}
             </a>
        </div>
    )
}


