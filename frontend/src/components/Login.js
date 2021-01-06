import React from 'react';
import axios from 'axios';
import auth from '../utils/auth';
import {Link} from 'react-router-dom';
import '../styles/form.scss';
import {
    Message
  } from "semantic-ui-react";

class Login extends React.Component {

    state = {
        errors: []
    };
    handleFormSubmit = async e =>{
        e.preventDefault();
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;

        const credentials = {
            email,
            password
        }
      
        if(this.isFormValid(credentials)){
            this.setState({
                errors: []
              });
            try{
                const config = {
                    headers: {
                        'Content-Type': 'Application/json'
                    }
                }
                const body = JSON.stringify(credentials);
                const res = await axios.post('/api/user/login', body, config);
                auth.setAuthToken(res.data.token);
                if(res.data.token){
                    window.location.href="/dashboard";
                }
                
            } catch(e){
                console.log(e); 
                let error={message: "Something went wrong. Try again!"};
                let errors = [];
                this.setState({
                    errors: errors.concat(error)
                })
            }
        }
    }
        
    

    isFormValid = (credentials) =>{
        let errors = [];
        let error;
        if(this.isFormEmpty(credentials)){
            error = {message : 'Fill in all the fields'};
            this.setState({errors: errors.concat(error)})
            return false;
        }
        else{
            return true;
        }
    }

    isFormEmpty = ({email, password})=>{
        return ( !password.length || !email.length);
    }

    displayErrors = (errors) =>
    errors.map((error, i) => <p key={i}>{error.message}</p>);

    render(){
        return (
            <form className="form" onSubmit={this.handleFormSubmit}>
            <h3 className="form__heading">Login</h3>
            <input 
              className="form__input" 
              placeholder="Email Address" 
              type="email" 
              name="email"
            />
            <input 
              className="form__input" 
              placeholder="Password" 
              type="password" 
              name="password"
            />
            <input
              className="form__btn"
              type="submit"
              name="submit"
              value="Login"
            />
            {this.state.errors.length > 0 && (
              <Message className="errorclass">
                {this.displayErrors(this.state.errors)}
              </Message>
            )}            
            <Message style={{marginTop: 30}}>
                Don't have an account? <Link to="/user/signup" >Sign Up</Link>
            </Message>
          </form>
        )
    }
}

export default Login;
