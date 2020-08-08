import React from "react";
import axios from "axios";
import auth from "../utils/auth";

class TimeTable extends React.Component{
    constructor(){
        super();
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount(){
        this.fetchData();
    }

    async fetchData(){
        try{
            const authToken = auth.getAuthToken();
            const config = {
              headers: {
                  'Content-Type': 'Application/json',
                  Authorization: `Bearer ${authToken}`
              }
            }
            const res = await axios.get('/api/fetchdata', config);
            console.log(res.data);
          } catch(err){
              console.log(err);
          }
    }

    render(){
        return(
            <div>
                <p>This is the Timetable</p>
            </div>
        )
    }
}


export default TimeTable;