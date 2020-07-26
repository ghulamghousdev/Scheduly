import React from 'react';
import '../styles/buttonbox.scss';

const ButtonBox = (props)=>{
    return (
        <div className="buttonbox">
            <a href="#" className={props.btOneClass}>SignUp</a>
            <a href="#" className={props.btTwoClass}>LogIn</a>
        </div>
    )
}

export default ButtonBox;