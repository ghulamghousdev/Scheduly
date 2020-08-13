import React from "react";
import "../styles/operatemanual.scss";
import Step from "./Step"

const OperateManual = (props)=>{
    return(
        <div className="operateManual">
            <Step 
                number="1" 
                heading="Add CLasses"
                instruction="Add all the classroom available in your department and assign one class to each section of every session."    
            />
            <Step 
                number="2"
                heading="Add Teachers"
                instruction="Add the teachers for subjects. You can have multiple teachers for each subject. But keep in mind that you will have to add teachers for labs seperately."    
            />
            <Step 
                number="3" 
                heading="Add Subjects"
                instruction="Add all the Subject that you are offering. There is no need to add a seperate subject for Lab"    
            />
            <Step 
                number="4"
                heading="Add Slots"
                instruction="Here you will be asked to provide a Slot for each lecture. Means to assign a teacher to a subject which will teach a specific section of a session."    
            />
            <Step 
                number="5" 
                heading="Generate"
                instruction="And finally Click generate and bang. You have created your timetable successfully"    
                extraClass="step--last"
            />
        </div>
    )
}

export default OperateManual;