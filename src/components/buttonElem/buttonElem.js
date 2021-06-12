import React from "react";
import {navigate} from '@reach/router';
import "./buttonElem.css"
import {Button} from 'react-bootstrap'
// import {Link} from 'gatsby'

export default function ButtonElem({text, target}){

    

    function handleClick(target){
        
        navigate(`/${target}`);
    }

    return(
        <div className="col-md-3">
            <Button
                onClick={() => handleClick(target)}
                variant="info"
                size="lg"
                className="teal-button session-button"
            >
                {text}
            </Button>
             
        </div>
    )
}


