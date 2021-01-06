import React from 'react';
import axios from 'axios';
import auth from '../utils/auth'
import '../styles/form.scss';
import {Link} from "react-router-dom"
import {
  Message
} from "semantic-ui-react";


class SignUp extends React.Component {
    state = {
      errors: []
    };

    handleFormSubmit = async e =>{
        e.preventDefault();
        const email = e.target.elements.email.value;
        const firstName = e.target.elements.firstname.value;
        const lastName = e.target.elements.lastname.value;
        const password = e.target.elements.password.value;
        const confirmedPassword = e.target.elements.confirm.value;
        const userData ={
            firstName,
            lastName,
            email,
            password,
            confirmedPassword
        }

        if(this.isFormValid(userData)){
          this.setState({
            errors: []
          });
          const newUser = {
              firstName,
              lastName,
              email,
              password
            }
          try{
              const config = {
                  headbers: {
                      'Content-Type': 'Application/json'
                    }
                }
              const body = JSON.stringify(newUser);
              const res = await axios.post('/api/user/signup', body, config);
              auth.setAuthToken(res.data.token);
              if(true){
                window.location.href="/user/login";
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

    isFormValid = (userData) =>{
        let errors = [];
        let error;
        if(this.isFormEmpty(userData)){
            error = {message : 'Fill in all the fields'};
            this.setState({errors: errors.concat(error)})
            return false;
        }
        else if (!this.isPasswordValid(userData)){
            error = { message: "Password should at least be 8 characters long" };
            this.setState({ errors: errors.concat(error) });
            return false;
        }
        else if (!this.isPasswordMatching(userData)){
            error = { message: "Password do not match" };
            this.setState({ errors: errors.concat(error) });
            return false;
        }
        else{
            return true;
        }
    }

    isFormEmpty = ({firstName, lastName, email, password, confirmedPassword})=>{
      return (!firstName.length || !lastName.length || !email.length || !password.length || !confirmedPassword.length);
    }

    isPasswordValid = ({password, confirmedPassword}) => {
      if (password.length < 8 || confirmedPassword.length < 8) {
        return false;
      } 
      else {
        return true;
      }
    }

    isPasswordMatching = ({password, confirmedPassword}) => {
      if (password !== confirmedPassword ) {
        return false;
      } 
      else {
        return true;
      }
    }

    displayErrors = (errors) =>
        errors.map((error, i) => <p key={i}>{error.message}</p>);

    render(){
        return (
            <form className="form" onSubmit={this.handleFormSubmit}>
            <h3 className="form__heading">SIGNUP</h3>
            <input 
              className="form__input" 
              placeholder="First Name" 
              type="text"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
              name="firstname"
            />
            <input 
              className="form__input" 
              placeholder="Last Name" 
              type="text" 
              name="lastname"
            />
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
              className="form__input" 
              placeholder="Confirm Password" 
              type="password" 
              name="confirm"
            />
            <input
              className="form__btn"
              type="submit"
              name="submit"
              value="Sign Up"
            />
            {this.state.errors.length > 0 && (
              <Message className="errorclass">
                {this.displayErrors(this.state.errors)}
              </Message>
            )}
            <Message style={{marginTop: 30}}>
                Already a user? <Link to="/user/login">Login</Link>
            </Message>
          </form>

        )
    }
}

export default SignUp;
