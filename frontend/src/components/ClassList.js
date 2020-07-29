import React from "react";
import ClassListItem from './ClassListItem';
import axios from "axios";
import '../styles/classlist.scss';

class ClassList extends React.Component {
    constructor(){
        super();
        this.handleRemoveClass = this.handleRemoveClass.bind(this);
        this.state={
            classes:[
                {className: 'N-7', section: 'A', session: '2018'},
                {className: 'N-8', section: 'B', session: '2018'},
                {className: 'N-9', section: 'C', session: '2018'},
                {className: 'N-10', section: 'D', session: '2017'},
                {className: 'N-11', section: 'E', session: '2017'},
            ]
        }
    }
    
    handleRemoveClass(className){
        this.setState((prevState)=>({
            classes: prevState.classes.filter((cur)=> cur.className !== className )
        }))
    }

    render(){
        return(
            <div class="viewbox">
                <h1 className="viewbox__heading">All Classes</h1>
                {this.state.classes.map((cur)=> (<ClassListItem remove={this.handleRemoveClass} classCode={cur.className} session={cur.session} section={cur.section} />))}
            </div>
        )
    }
}

export default ClassList;