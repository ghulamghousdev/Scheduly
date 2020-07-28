import React from "react";
import axios from "axios";
import "../styles/addform.scss";

class AddSubject extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div class="addform">
                <form>
                    <h1 className="addform__heading">Add Subject</h1>
                    <input 
                        className="addform__input addform__input--full" 
                        type="text" 
                        placeholder="Subject Code" 
                        name="subjectCode"
                    />
                    <input 
                        className="addform__input  addform__input--full" 
                        type="text" 
                        placeholder="Subject Name" 
                        name="subjectName"
                    />
                    <input 
                        className="addform__input addform__input--half addform__input--left" 
                        type="number" 
                        placeholder="Credit Hours" 
                        name="creditHours"
                    />
                    <input 
                        className="addform__input addform__input--half addform__input--right" 
                        type="number" 
                        placeholder="Contact Hours" 
                        name="contactHours"
                    />
                    <input 
                        className="addform__btn" 
                        type="submit" 
                        name="submit" 
                        value="ADD SUBJECT"
                    />
                </form>
            </div>
        )
    }
}

export default AddSubject;