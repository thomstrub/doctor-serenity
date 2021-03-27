import React from "react";
import "./button.css"
import {Button} from 'react-bootstrap'
import {Link} from 'gatsby'

export default function ButtonElem({text}){
    return(
        <div className="col-md-3">
            <Button
                
                variant="info"
                size="lg"
                className="teal-button session-button"
            >
                {text}
            </Button>
             
        </div>
    )
}


