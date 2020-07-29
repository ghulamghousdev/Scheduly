import React from "react";
import axios from "axios";
import Class from './Class';
import "../styles/addform.scss";

class AddClass extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div class="addform">
                <form>
                    <h1 className="addform__heading">Add CLass</h1>
                    <input 
                        className="addform__input addform__input--full" 
                        type="text" 
                        placeholder="Class Name" 
                        name="className"
                    />
                    <input 
                        className="addform__input  addform__input--half addform__input--left" 
                        type="text" 
                        placeholder="Alloted Session" 
                        name="session"
                    />
                    <input 
                        className="addform__input addform__input--half addform__input--right" 
                        type="text" 
                        placeholder="Alloted Section" 
                        name="section"
                    />
                    <input 
                        className="addform__btn" 
                        type="submit" 
                        name="submit" 
                        value="ADD CLASS"
                    />
                </form>
            </div>
        )
    }
}

export default AddClass;