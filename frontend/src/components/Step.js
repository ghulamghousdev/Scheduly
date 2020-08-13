import React from "react";
import "../styles/step.scss";

const Step = (props)=>{
    return(
        <div className={`step-container ${props.extraClass}`}>
            <div className="step">
                <p className="step__number"><span>{props.number}</span></p>
                <div className="step__instruction">
                    <h3 className="step__instruction__heading">{props.heading}</h3>
                    <p className="step__instruction__para">{props.instruction}</p>
                </div>
                
            </div>
        </div>
    )
}

export default Step;