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
                style={{
                    width: '248px',
                    height: '68px',
                    fontStyle: 'italic',
                    fontWeight: "bold",
                    fontSize: '22px',
                    lineHeight: '28px',
                    backgroundColor: '#5FB1AC',
                    borderRadius: '6px',
                    fontFamily: 'Merriweather'
                }}
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


