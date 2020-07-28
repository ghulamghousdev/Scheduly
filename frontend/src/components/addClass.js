import React from "react";
import axios from "axios";

class AddClass extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <form>
                    <h1>Add CLass</h1>
                    <input placeholder="Class Name" name="className"/>
                    <input placeholder="Alloted Session" name="session"/>
                    <input placeholder="Alloted Section" name="section"/>
                </form>
            </div>
        )
    }
}

export default AddClass;